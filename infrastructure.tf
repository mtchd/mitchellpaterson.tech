provider "aws" {
  region                  = "ap-southeast-2"
  profile                 = "Chicken"
}

resource "aws_s3_bucket" "chicken-pets-highscore" {
  bucket = "chicken-pets-highscore"
  acl    = "private"

  tags = {
    Name = "chicken-pets-highscore"
  }
}
// TODO: Make this role more restrictive
resource "aws_iam_role" "iam_for_chicken" {
  name = "iam_for_chicken"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "chicken_pets_put" {
  filename      = "put-lambda.zip"
  function_name = "chicken_pets_put"
  role          = "${aws_iam_role.iam_for_chicken.arn}"
  handler       = "put-lambda.lambda_handler"

  # The filebase64sha256() function is available in Terraform 0.11.12 and later
  # For Terraform 0.11.11 and earlier, use the base64sha256() function and the file() function:
  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"
  source_code_hash = "${filebase64sha256("put-lambda.zip")}"

  runtime = "python3.8"

}

resource "aws_iam_policy" "really_insecure" {
  name = "really_insecure"
  path = "/"
  description = "Really insecure policy to allow lambda, s3 and iam interactions."

  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:*",
                "s3:*",
                "lambda:*"
            ],
            "Resource": "*"
        }
    ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "test-attach" {
  role       = "${aws_iam_role.iam_for_chicken.name}"
  policy_arn = "${aws_iam_policy.really_insecure.arn}"
}