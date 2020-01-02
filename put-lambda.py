import boto3
import json

def lambda_handler(event, context):

    bucket_name = "chicken-pets-highscore"
    s3_path = "highscore.json"
  
    print("yeet")

    client = boto3.client('s3')

    highscore_object = client.get_object(Bucket=bucket_name, Key=s3_path)

    print(highscore_object)

    highscore_raw = highscore_object["Body"].read()

    highscore_json = json.loads(highscore_raw)

    print(highscore_json)

    highscore_string = highscore_json["highscore"]
    
    highscore_int = int(highscore_string)

    # Now get from event
    
    print(event)

    incoming_highscore = int(json.loads(event["body"])["highscore"])

    print("Incoming Highscore:", incoming_highscore)

    if (incoming_highscore > highscore_int and incoming_highscore < highscore_int + 20):
      
      print("I'm in")

      string = event["body"]
      encoded_string = string.encode("utf-8")

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
      "body": "Yeet"
    }