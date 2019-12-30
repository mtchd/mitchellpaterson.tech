import boto3
import json

def lambda_handler(event, context):

    bucket_name = "chicken-pets-highscore"
    s3_path = "highscore.json"

    client = boto3.client('s3')

    highscore_object = client.get_object(Bucket=bucket_name, Key=s3_path)

    print(highscore_object)

    highscore_raw = highscore_object["Body"].read()

    highscore_json = json.loads(highscore_raw)

    print(highscore_json)

    return {
      "statusCode": 200,
      "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": '*',
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      },
      "body": f"{json.dumps(highscore_json)}"
    }

