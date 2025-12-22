# Demo with Angular


## Create project
```
$ng new demo02
$cd demo02
```


## Generate SBOM file
```
$npm install --global @cyclonedx/cyclonedx-npm
$cyclonedx-npm --output-format JSON --output-file sbom.json
```