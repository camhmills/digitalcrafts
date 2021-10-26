function printBanners(title) {
    bannerEdge = "-"
    console.log(bannerEdge.repeat(title.length + 4))
    console.log(`- ${title} -`)
    console.log(bannerEdge.repeat(title.length + 4))

}

printBanners("Welcome to DigitalCrafts!")