for file in $(curl -s www.polisemia.com.pl/numery-czasopisma/numer-1-2019-21---rewolucje/ |
                  grep href |
                  sed 's/.*href="//' |
                  sed 's/".*//' |
                  grep '^[a-zA-Z].*'); 
	  do echo $file; done