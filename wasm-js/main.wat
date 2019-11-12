(module
    (import "js" "myImport" (func $i1))
    (func $main (call $i1))
    (start $main)
    (func (export "myExport") (call $i1))
)