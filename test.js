import test from "ava"
import FormData from "."

test("main", (t) => {
    const formData = new FormData()
    formData.set("a", "val")
    t.is(formData.get("a"), "val")
})
