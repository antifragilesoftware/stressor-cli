# Stressor CLI

Sample project to explore creating a stressor runtime system.

## To install locally as `stressor`

Execute: 

```shell
> sudo npm install -g
```

Then:

```shell
> sudo npm link
```

You can then dev your `stressor` tool to your heart's content.

## Samples with installing and linking locally

```shell
> stressor "./network-wifi-stressor.sh" "{\"delay\" : 5}"
```

```shell
> stressor "node network-wifi-stressor.js" "{\"delay\" : 5}"
```

## Samples without installing and linking

```shell
> node stressor-cli.js "./network-wifi-stressor.sh" "{\"delay\" : 5}"
```

```shell
> node stressor-cli.js "node network-wifi-stressor.js" "{\"delay\" : 5}"
```