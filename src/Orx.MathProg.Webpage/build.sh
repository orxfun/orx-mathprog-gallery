cp -r ../../docs/sandcastle ../../sandcastle
rm -r ../../docs
mkdir ../../docs

npm run build
sed -i 's/"\//"/g' build/index.html

cp -r build/* ../../docs

cp -r ../../sandcastle ../../docs/sandcastle
rm -r ../../sandcastle
