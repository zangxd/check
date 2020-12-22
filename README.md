# lint
A collection of configuration files containing prettier, eslint, commit-lint

## usage

### eslint

```
module.exports = require('@gleaning/lint').eslint;
```

### prettier

```
module.exports = require('@gleaning/lint').prettier;
```

### commit-lint

```
"husky": {
    "hooks": {
      "commit-lint": "glean commit-lint"
    }
  },
```