import boto3

def lambda_handler(event, context):

    print(event)

    string = event["body"]
    encoded_string = string.encode("utf-8")

    bucket_name = "chicken-pets-highscore"
    s3_path = "highscore.json"

    s3 = boto3.resource("s3")
    s3.Bucket(bucket_name).put_object(Key=s3_path, Body=encoded_string)

    return {
      "statusCode": 200,
      "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": '*',
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      },
      "body": "The bucket put seems to have succeeded."
    }