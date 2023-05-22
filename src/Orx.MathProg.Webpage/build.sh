rm -r ../../docs/
mkdir ../../docs

npm run build
sed -i 's/"\//"/g' build/index.html

cp -r build/* ../../docs
