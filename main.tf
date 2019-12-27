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