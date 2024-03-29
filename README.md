# capacitor-android-keystore-plugin
This plugin uses Android Keystore to encrypt/decrypt a string. 

![DEMO Video](https://github.com/idreamer/capacitor-android-keystore-plugin/blob/main/resources/Capacitor_Keystore_Plugin_Demo.mp4)

## Install

```bash
npm install ikeystore-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`encrypt(...)`](#encrypt)
* [`decrypt(...)`](#decrypt)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### encrypt(...)

```typescript
encrypt(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### decrypt(...)

```typescript
decrypt(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
