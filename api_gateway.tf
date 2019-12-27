resource "aws_api_gateway_rest_api" "chicken_api" {
  name        = "chicken_api"
  description = "The chicken API"
}

resource "aws_api_gateway_resource" "chicken_resource" {
  rest_api_id = "${aws_api_gateway_rest_api.chicken_api.id}"
  parent_id   = "${aws_api_gateway_rest_api.chicken_api.root_resource_id}"
  path_part   = "chicken_resource"
}

resource "aws_api_gateway_method" "put_highscore" {
  rest_api_id   = "${aws_api_gateway_rest_api.chicken_api.id}"
  resource_id   = "${aws_api_gateway_resource.chicken_resource.id}"
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "put_lambda_integration" {
  rest_api_id             = "${aws_api_gateway_rest_api.chicken_api.id}"
  resource_id             = "${aws_api_gateway_resource.chicken_resource.id}"
  http_method             = "${aws_api_gateway_method.put_highscore.http_method}"
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = "${aws_lambda_function.chicken_pets_put.invoke_arn}"
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

variable "stage_name" {
  default = "chicken_prod"
}


resource "aws_api_gateway_stage" "chicken_stage" {
  stage_name    = "${var.stage_name}"
  rest_api_id   = "${aws_api_gateway_rest_api.chicken_api.id}"
  deployment_id = "${aws_api_gateway_deployment.chicken_deployment.id}"

  depends_on = ["aws_cloudwatch_log_group.chicken_api"]
}

resource "aws_api_gateway_deployment" "chicken_deployment" {
  depends_on  = ["aws_api_gateway_integration.put_lambda_integration"]
  rest_api_id = "${aws_api_gateway_rest_api.chicken_api.id}"
  stage_name  = "chicken_dev"
}

resource "aws_api_gateway_method_settings" "chicken_put_settings" {
  rest_api_id = "${aws_api_gateway_rest_api.chicken_api.id}"
  stage_name  = "${aws_api_gateway_stage.chicken_stage.stage_name}"
  method_path = "${aws_api_gateway_resource.chicken_resource.path_part}/${aws_api_gateway_method.put_highscore.http_method}"

  settings {
    metrics_enabled = true
    logging_level   = "INFO"
  }
}

resource "aws_cloudwatch_log_group" "chicken_api" {
  name              = "API-Gateway-Execution-Logs_${aws_api_gateway_rest_api.chicken_api.id}/${var.stage_name}"
  retention_in_days = 7
}

