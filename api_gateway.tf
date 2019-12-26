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