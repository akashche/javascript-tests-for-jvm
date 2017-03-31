
// https://bugs.dojotoolkit.org/ticket/17806
readFile = function(path, encoding){
    var pa = Packages.java.nio.file.Paths.get(path);
    var binary = java.nio.file.Files.readAllBytes(pa);
    var jstr = new Packages.java.lang.String(binary, encoding);
    return String(jstr);
};

readUrl = readFile;

load("dojo/dojo.js")
