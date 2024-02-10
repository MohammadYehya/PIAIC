'use server'

export const onSubmit = async (formdata: FormData) =>
{
    let firstName = formdata.get('FirstName')
    console.log(firstName)
}