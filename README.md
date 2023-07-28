# Scrollery

View on: [NPM](https://www.npmjs.com/package/@nguyend-nam/scrollery-ts) &bullet; [GitHub](https://github.com/nguyend-nam/scrollery)

[Official website](https://scrollery.js.org)

Scrollery is a specialized UI library that empowers developers to effortlessly animate images as users scroll through web applications. With Scrollery, you can create stunning, interactive, and engaging image animations that leave a lasting impression on your users.

<image src="https://raw.githubusercontent.com/nguyend-nam/scrollery/main/public/preview.gif"></image>

## Installation

```bash
yarn add @nguyend-nam/scrollery-ts
```

or install using npm:

```bash
npm i @nguyend-nam/scrollery-ts
```

## Usage

### Import wrapper components

```javascript
import {
  LinearlyScaledWrapper,
  StackedWrapper,
} from "@nguyend-nam/scrollery-ts";
```

### Using in the web

Put the `img`s inside the wrappers with some custom style/className:

```javascript
// ...

<LinearlyScaledWrapper className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]">
  <img
    src="/img/cat1.png"
    className="w-full h-full object-cover"
    alt="Coding cat"
  />
</LinearlyScaledWrapper>

<StackedWrapper className="w-full space-y-[1400px] !mt-8 !mb-40 px-4">
  <img
    src="/img/cat2.png"
    className="w-full h-full object-cover"
    alt="Flexing cat"
  />
  <img
    src="/img/cat3.png"
    className="w-full h-full object-cover"
    alt="Sitting cat"
  />
  <img
    src="/img/cat4.png"
    className="w-full h-full object-cover"
    alt="Sleepy cat"
  />
</StackedWrapper>

// ...
```

### Preview

<image src="https://raw.githubusercontent.com/nguyend-nam/scrollery/main/public/example.gif"></image>

## Official website & documentation

- Official website: https://scrollery.js.org
- Document: https://scrollery.js.org/introduction

## Contributing

Scrollery is an open-source project hosted on GitHub, and we encourage you to join us in shaping its future. Whether you have ideas for new features, want to report bugs, or are interested in improving the library's functionality, your contributions are highly valued. Visit our GitHub repository at https://github.com/nguyend-nam/scrollery to get involved and contribute to the project.

## License

[ISC](https://choosealicense.com/licenses/isc/)
