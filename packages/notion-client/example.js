const { NotionAPI } = require('./build')

async function main() {
  const api = new NotionAPI()

  // page example
  // const output = await api.getPage('067dd719-a912-471e-a9a3-ac10710e7fdf')

  // collection example
  // const collectionId = '2d8aec23-8281-4a94-9090-caaf823dd21a'
  // const collectionViewId = 'ab639a5a-853e-45e1-9ef7-133b486c0acf'
  // const output = await api.getCollectionData(collectionId, collectionViewId)

  // signed url example
  const file = {
    permissionRecord: {
      id: 'd142a056-f104-477c-96d5-2b03fdd8c6e3',
      table: 'block'
    },
    url:
      'https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f428f70f-aadc-45e3-acdc-72f762c2fbc9/Aaron_Wang_Design_Resume.pdf'
  }

  const output = await api.getSignedFileUrls([file])

  console.log(JSON.stringify(output, null, 2))
}

main()