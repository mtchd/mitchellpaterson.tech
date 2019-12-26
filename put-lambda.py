import boto3

def lambda_handler(event, context):
    string = "10"
    encoded_string = string.encode("utf-8")

    bucket_name = "chicken-pets-highscore"
    file_name = "highscore.txt"
    s3_path = "/100001/20180223/" + file_name

    s3 = boto3.resource("s3")
    s3.Bucket(bucket_name).put_object(Key=s3_path, Body=encoded_string)