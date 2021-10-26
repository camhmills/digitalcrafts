function leetSpeek(str) {
    string1 = str.replace(/a/gi, "4")
    string2 = string1.replace(/e/gi, "3")
    string3 = string2.replace(/g/gi, "6")
    string4 = string3.replace(/i/gi, "1")
    string5 = string4.replace(/o/gi, "0")
    string6 = string5.replace(/s/gi, "5")
    string7 = string6.replace(/t/gi, "7")
    console.log(string7)
}

leetSpeek("leet leet leet leet leet")