provider "aws" {
  region                  = "ap-southeast-2"
  profile                 = "Chicken"
}

resource "aws_s3_bucket" "chicken_pets_highscore" {
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

resource "aws_iam_role_policy_attachment" "test_attach" {
  role       = "${aws_iam_role.iam_for_chicken.name}"
  policy_arn = "${aws_iam_policy.really_insecure.arn}"
}

# Lambda
resource "aws_lambda_permission" "put_lambda_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.chicken_pets_put.function_name}"
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  source_arn = "arn:aws:execute-api:${var.myregion}:${var.accountId}:${aws_api_gateway_rest_api.chicken_api.id}/*/${aws_api_gateway_method.put_highscore.http_method}${aws_api_gateway_resource.chicken_resource.path}"
}

variable "myregion" {
  default = "ap-southeast-2"
}

variable "accountId" {
  default = "271630769548"
}