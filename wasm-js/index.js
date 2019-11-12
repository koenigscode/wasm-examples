const importObj = { js: { myImport: () => console.log("Hello from Wasm!") } }

WebAssembly.instantiateStreaming(fetch("demo.wasm"), importObj)
    .then(({ module, instance }) => {
        instance.exports.myExport()
    })