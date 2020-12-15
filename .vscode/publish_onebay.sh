MYDIR=`pwd`
onebay="${MYDIR}/packages/onebay-ui"
cd $onebay
registry=`nrm current`

if [ $registry == 'localnpm' ]; 
then
  npm unpublish onebay-ui --force
  npm run build
  npm publish
else
  echo 'Your npm registry is not localnpm!!'
fi