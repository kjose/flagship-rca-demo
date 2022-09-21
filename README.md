# Flagship - Remote control api - Demo

This project is a demo app to show how to use the remote control api to automate flags and campaigns creation.

It uses the tag version on github to create a new project called `{TAG_VERSION}` and a new campaign `{TAG_VERSION}`.
It automatically creates a flag called `{TAG_VERSION}` too.

Site here : https://flagship-rca-demo.netlify.app/

## Prerequisites

- Create a remote control api client and token with scopes `campaign.create`, `flag.create`, `project.create` in the platform.
- Add the github secret environment variables in settings : 
    - `FS_TOKEN`: The remote api control token you created
    - `FS_ACCOUNT_ID`: Your account id 
    - `FS_ENV_ID`: Your environment id 

## Start the project

```
npm install
npm start
```

## How to add a new flag

1. Add in your code the flag condition (use the SDK or api you want)

```
    const feature1_0_1_enabled = useFsFlag("1.0.1",false);
    ...
    <div className="features">
        {feature1_0_1_enabled.getValue() && <span>Feature 1.0.1</span>}
    </div>
```

2. Commit and tag your project (use the version as the tag name)

```
git tag 1.0.1
git push origin 1.0.1
```

3. Check your flagship account, and when done, you can go live your test it will be created in the project `1.0.1`.

## Go further

If you want to adapt the behavior of how projects, flags and campaigns are created, you can edit the github action file in `.github/workflows/flagship.yml`
