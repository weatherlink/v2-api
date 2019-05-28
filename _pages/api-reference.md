---
title: API Reference
permalink: /api-reference
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.22.1/swagger-ui.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.22.1/swagger-ui-bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.22.1/swagger-ui-standalone-preset.js"></script>


<div id="api-ref"></div>
<script>
var ui = SwaggerUIBundle({
	dom_id: '#api-ref',
	url: "https://weatherlink.github.io/v2-api/_pages/v2-api.yaml",
	presets: [
		SwaggerUIBundle.presets.apis,
		SwaggerUIBundle.SwaggerUIStandalonePreset
	],
	layout: "BaseLayout",
	supportedSubmitMethods: []
});
</script>
