# declaring an array with the magazine editions
declare -a numbers=(http://www.polisemia.com.pl/numery-czasopisma/numer-1-2019-21---rewolucje http://www.polisemia.com.pl/numery-czasopisma/rewolucje
http://www.polisemia.com.pl/numery-czasopisma/Numer-22018-20---Strach
http://www.polisemia.com.pl/numery-czasopisma/numer-2-2017-przeszlosc
http://www.polisemia.com.pl/numery-czasopisma/krzyk-mody
http://www.polisemia.com.pl/numery-czasopisma/numer-2-2016-fetysze
http://www.polisemia.com.pl/numery-czasopisma/numer-1-2016-15-wschod
http://www.polisemia.com.pl/numery-czasopisma/numer-1-2015-14-men-studies
http://www.polisemia.com.pl/numery-czasopisma/numer-2-2014-13
http://www.polisemia.com.pl/numery-czasopisma/NUMER-12014-12
http://www.polisemia.com.pl/numery-czasopisma/numer-2-2013-11
http://www.polisemia.com.pl/numery-czasopisma/12013
http://www.polisemia.com.pl/numery-czasopisma/numer-2-2012-9
http://www.polisemia.com.pl/numery-czasopisma/numer-12012-8
http://www.polisemia.com.pl/numery-czasopisma/numer-3-2011-7
http://www.polisemia.com.pl/numery-czasopisma/numer-2-2011-6
http://www.polisemia.com.pl/numery-czasopisma/numer-12011-5
http://www.polisemia.com.pl/numery-czasopisma/numer-4-2010-4
http://www.polisemia.com.pl/numery-czasopisma/numer-3-2010-3
http://www.polisemia.com.pl/numery-czasopisma/numer-2-2010-2
http://www.polisemia.com.pl/numery-czasopisma/numer-1-2010-1)

for name in ${numbers[@]}
do 
    echo $name|
    curl -s $name|grep 'href' |sed 's/.*href="//' |sed 's/".*//' |grep '^[a-zA-Z].*'|grep -v site|grep -ve 'com.pl/$' >> articles.txt
done
# for file in 

# for file in $(curl -s www.polisemia.com.pl/numery-czasopisma/numer-1-2019-21---rewolucje/ |
#                   grep href |
#                   sed 's/.*href="//' |
#                   sed 's/".*//' |
#                   grep '^[a-zA-Z].*'); 
# 	  do echo $file; done

# 1. array with the URLs of numbers and titles - move it to the object like style with the url and the title 
# 2. for each url from an array perform a curl and get the url of the articles 
# a/ clean the output to have only articles 
# b/ put the articles in the array of the number (?)
# c/ extract the name and the title for each artile and put it to the array

