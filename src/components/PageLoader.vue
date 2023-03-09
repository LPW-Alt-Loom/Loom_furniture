<template>
  <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
  <div class="loader">
    <div class="svg">
      <svg
        width="150"
        height="300"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 300px;
}
.svg {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
