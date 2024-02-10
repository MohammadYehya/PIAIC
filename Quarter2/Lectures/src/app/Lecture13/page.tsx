'use client'

import { onSubmit } from "./actions/onSubmit";

export default () =>
{
  
  return (
    <>
      <p>
        Firstly, create an account on vercel.
      </p>
      <p>
        Then link it with github for importing projects.
      </p>
      <p>
        Then add a new project.
      </p>
      <p>
        Make sure that if any environment variables are used, they are specified in the vercel deployment, as github doesn't push any env variables.
      </p>
      <p>
        Your application is now deployed.
      </p>
      <p className="mt-4">
        If you don't wan't to deploy using github but locally, then you need to first install a package
        using this command
      </p>
      <p>
        npm i -g vercel 
      </p>
      <p>
        Then run the command: vercel
      </p>
      <p>
        and answer some questions about the project
      </p>
      <p>
        And now you have deployed your app locally
      </p>
      <p className="mt-4 text-lg">Server Actions</p>

      <form action={onSubmit}>
        <input type="text" className="border p-4" placeholder="FirstName" name="FirstName"/>
        <button type="submit" className="bg-blue-500 text-white px-4 py-4">Submit</button>
      </form>
      <p></p>
    </>
  );
}