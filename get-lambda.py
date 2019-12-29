import boto3

def lambda_handler(event, context):

    bucket_name = "chicken-pets-highscore"
    s3_path = "highscore.json"

    s3 = boto3.resource("s3")
    s3.download_file(bucket_name, s3_path)

    s3.get_object(bucket_name, s3_path)