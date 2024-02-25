export function filterByTag() {
  let tags = ['# react', '# software engineering']

  tags = Array.from(new Set(tags))

  const filter = document.querySelector('.dashboardSectionContentHeadingFilter')
  const filterbyTagsContent = document.querySelector('.filterbyTagsContent')
  const filterDownArrow = document.querySelector('.filterDownArrow')
  const filterAddPlus = document.querySelector('.filterAddPlus')
  const filterbyTagTick = document.querySelector('.filterbyTagTick')
  const dashboardSectionContentHeadingFilterByTags = document.querySelector(
    '.dashboardSectionContentHeadingFilterByTags',
  )
  const filterTagInputText = document.querySelector('.filterTagInputText')

  let isOpen = false

  const filterByTagsContentContainer = document.createElement('div')
  filterByTagsContentContainer.classList.add('filterByTagsContentContainer')
  filterbyTagsContent.appendChild(filterByTagsContentContainer)

  function updateFilterByTagsContent() {
    filterByTagsContentContainer.innerHTML = '';
    tags.forEach((tag) => {
      const tagDetail = document.createElement('span')
      tagDetail.classList.add('tagDetail')
      tagDetail.textContent = tag
      filterByTagsContentContainer.appendChild(tagDetail)
      tagDetail.addEventListener('click', function () {
        document.querySelectorAll('.tagDetail').forEach((tag) => {
          tag.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        })
        if (
          dashboardSectionContentHeadingFilterByTags.textContent ===
          this.textContent.slice(1)
        ) {
          this.style.backgroundColor = 'rgba(255, 255, 255, 1)'
          dashboardSectionContentHeadingFilterByTags.textContent =
            'Filter by Tags'
        } else {
          this.style.backgroundColor = 'rgba(244, 244, 244, 1)'
          dashboardSectionContentHeadingFilterByTags.textContent =
            this.textContent.slice(1)
        }
      })
    });
  }

  filter.addEventListener('click', function (event) {
    event.stopPropagation()
    isOpen = !isOpen
    if (isOpen) {
      filterbyTagsContent.style.display = 'block'
      filterDownArrow.style.display = 'none'
      filterAddPlus.style.display = 'flex'
      dashboardSectionContentHeadingFilterByTags.textContent = ''
      updateFilterByTagsContent(); 
    } else {
      filterbyTagsContent.style.display = 'none'
      filterDownArrow.style.display = 'flex'
      filterAddPlus.style.display = 'none'
      dashboardSectionContentHeadingFilterByTags.textContent = 'Filter by Tags'
    }
  })

  filterAddPlus.addEventListener('click', function (event) {
    event.stopPropagation()
    filterAddPlus.style.display = 'none'
    dashboardSectionContentHeadingFilterByTags.style.display = 'none'
    filterbyTagTick.style.display = 'flex'
    document.querySelectorAll('.tagDetail').forEach((tag) => {
      tag.style.backgroundColor = 'rgba(255, 255, 255, 1)'
      tag.style.pointerEvents = 'none'
    })
    filterTagInputText.style.display = 'flex'
  })

  filterTagInputText.addEventListener('click', function (event) {
    event.stopPropagation()
  })

  filterbyTagTick.addEventListener('click', function (event) {
    event.stopPropagation()
    if (!filterTagInputText.value) {
      console.log("There is no tag to add")
    } else {
      tags.push("#" + " " + filterTagInputText.value)
      filterTagInputText.value = ''
      filterTagInputText.style.display = 'none'
      filterbyTagTick.style.display = 'none'
      filterAddPlus.style.display = 'flex'
      dashboardSectionContentHeadingFilterByTags.style.display = 'flex'
      dashboardSectionContentHeadingFilterByTags.textContent = 'Filter by Tags'
      updateFilterByTagsContent(); 
    }
  })

  document.body.addEventListener('click', function (event) {
    const target = event.target
    if (
      !filter.contains(target) &&
      !filterbyTagsContent.contains(target) &&
      !filterAddPlus.contains(target) &&
      !filterTagInputText.contains(target) &&
      !filterbyTagTick.contains(target)
    ) {
      filterbyTagsContent.style.display = 'none'
      filterDownArrow.style.display = 'flex'
      filterAddPlus.style.display = 'none'
      dashboardSectionContentHeadingFilterByTags.style.display = 'flex'
      dashboardSectionContentHeadingFilterByTags.textContent = 'Filter by Tags'
      filterbyTagTick.style.display = 'none'
      filterTagInputText.style.display = 'none'
      isOpen = false
    }
  })
}
