
//main controller for image display
controllers.controller("mainController",function($scope,$timeout) {
	$scope.init = function() {
		$timeout( function(){
			$scope.creds = {
	  
				access_key: "access_key_name", 
				secret_key: "secret_access_key_name",
				bucket:'bucket_name'
			};
			AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
			AWS.config.region = 'us-west-2';
			var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
			$scope.s3Url = 'https://<bucketName>.s3.amazonaws.com/';
  
			bucket.listObjects(function (err, data) {
				if (err) {
					console.log(err);
				} else {
					console.log(data.Contents[0]);
					$scope.allImageData = data.Contents;
					$scope.$digest();
				}
			});
		}, 100 );
  }

$scope.init();
});
