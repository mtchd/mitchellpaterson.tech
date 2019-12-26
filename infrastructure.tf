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
  filename      = "put-lambda.py"
  function_name = "chicken_pets_put"
  role          = "${aws_iam_role.iam_for_chicken.arn}"
  handler       = "lambda_handler"

  # The filebase64sha256() function is available in Terraform 0.11.12 and later
  # For Terraform 0.11.11 and earlier, use the base64sha256() function and the file() function:
  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"
  source_code_hash = "${filebase64sha256("put-lambda.py")}"

  runtime = "python3.8"

}