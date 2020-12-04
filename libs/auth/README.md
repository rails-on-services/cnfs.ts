# auth

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test auth` to execute the unit tests.

## Usage

### **authorization** directive

Add the directive `*authorization` on any component. It takes an action string as an input. If current user has access to this action, component will be displayed, otherwise it will not be added to the dom.

```html
<button *authorization="'iam:user:create'">New User</button>
```

### **authorization** service

Use the service to know programatically if the current user has access to an action or not.

```ts
service.hasAccess('iam:user:create').subscribe((res) => {
  if (res) {
    //user has access
  } else {
    //user does not have access
  }
});
```
