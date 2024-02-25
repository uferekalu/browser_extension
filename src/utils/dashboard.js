import { filterByTag } from './filterByTag'
import { recentNameSort } from './recentNameSort'
import {
  setIsBookmarks,
  getIsBookmarks,
  listOption,
  isListDetail,
  isCardDetail,
  setIsFavorites,
  setIsCollection,
  setIsLinks,
  setIsImages,
  setIsVideos,
  setIsArticles,
  getIsFavorites,
  getIsCollection,
  getIsLinks,
  getIsImages,
  getIsVideos,
  getIsArticles,
} from './listOption'
import { dashboardSectionContentDetailsDiv } from './dashboardSectionContentDetails'

export function dashboard() {
  listOption()
  const dashboardSection = document.querySelector('.dashboardSection')
  const dashboardHolder = document.querySelector('.dashboardHolder')
  const mainContainer = document.querySelector('.mainContainer')
  const emptyDiv = document.querySelector('.emptyDiv')
  const footer = document.querySelector('.footer')
  const openTabHolder = document.querySelector('.openTabHolder')
  const dashboardSectionSidebarBookmark = document.querySelector(
    '.dashboardSectionSidebarBookmark',
  )
  const dashboardSectionSidebarBookmarkIcon = document.querySelector(
    '.dashboardSectionSidebarBookmarkIcon',
  )
  const dashboardSectionSidebarBookmarkText = document.querySelector(
    '.dashboardSectionSidebarBookmarkText',
  )
  const dashboardSectionSidebarFavorite = document.querySelector(
    '.dashboardSectionSidebarFavorite',
  )
  const dashboardSectionSidebarFavoriteText = document.querySelector(
    '.dashboardSectionSidebarFavoriteText',
  )
  const dashboardSectionSidebarFavoriteIcon = document.querySelector(
    '.dashboardSectionSidebarFavoriteIcon',
  )
  const dashboardSectionSidebarCollection = document.querySelector(
    '.dashboardSectionSidebarCollection',
  )
  const dashboardSectionSidebarCollectionIcon = document.querySelector(
    '.dashboardSectionSidebarCollectionIcon',
  )
  const dashboardSectionSidebarCollectionText = document.querySelector(
    '.dashboardSectionSidebarCollectionText',
  )
  const dashboardSectionSidebarLinks = document.querySelector(
    '.dashboardSectionSidebarLinks',
  )
  const dashboardSectionSidebarLinksIcon = document.querySelector(
    '.dashboardSectionSidebarLinksIcon',
  )
  const dashboardSectionSidebarLinksText = document.querySelector(
    '.dashboardSectionSidebarLinksText',
  )
  const dashboardSectionSidebarImages = document.querySelector(
    '.dashboardSectionSidebarImages',
  )
  const dashboardSectionSidebarImagesIcon = document.querySelector(
    '.dashboardSectionSidebarImagesIcon',
  )
  const dashboardSectionSidebarImagesText = document.querySelector(
    '.dashboardSectionSidebarImagesText',
  )
  const dashboardSectionSidebarVideos = document.querySelector(
    '.dashboardSectionSidebarVideos',
  )
  const dashboardSectionSidebarVideoIcon = document.querySelector(
    '.dashboardSectionSidebarVideoIcon',
  )
  const dashboardSectionSidebarVideoText = document.querySelector(
    '.dashboardSectionSidebarVideoText',
  )
  const dashboardSectionSidebarArticles = document.querySelector(
    '.dashboardSectionSidebarArticles',
  )
  const dashboardSectionSidebarArticlesIcon = document.querySelector(
    '.dashboardSectionSidebarArticlesIcon',
  )
  const dashboardSectionSidebarArticlesText = document.querySelector(
    '.dashboardSectionSidebarArticlesText',
  )
  const dashboardSectionSidebarCollectionIconSelected = document.querySelector(
    '.dashboardSectionSidebarCollectionIconSelected',
  )
  const dashboardSectionSidebarBookmarkIconSelected = document.querySelector(
    '.dashboardSectionSidebarBookmarkIconSelected',
  )
  const dashboardSectionSidebarFavoriteIconSelected = document.querySelector(
    '.dashboardSectionSidebarFavoriteIconSelected',
  )
  const dashboardSectionSidebarLinksIconSelected = document.querySelector(
    '.dashboardSectionSidebarLinksIconSelected',
  )
  const dashboardSectionSidebarImagesIconSelected = document.querySelector(
    '.dashboardSectionSidebarImagesIconSelected',
  )
  const dashboardSectionSidebarVideoIconSelected = document.querySelector(
    '.dashboardSectionSidebarVideoIconSelected',
  )
  const dashboardSectionSidebarArticlesIconSelected = document.querySelector(
    '.dashboardSectionSidebarArticlesIconSelected',
  )
  const dashboardSectionContentHolder = document.querySelector(
    '.dashboardSectionContentHolder',
  )
  const showdropdown = document.querySelector(
    '.showdropdown',
  )

  const dashboardCardDisplay = document.querySelector('.dashboardCardDisplay')
  const dashboardFavorites = document.querySelector('.dashboardFavorites')
  const dashboardCollection = document.querySelector('.dashboardCollection')
  const dashboardLinks = document.querySelector('.dashboardLinks')
  const dashboardImages = document.querySelector('.dashboardImages')
  const dashboardVideos = document.querySelector('.dashboardVideos')
  const dashboardArticles = document.querySelector('.dashboardArticles')

  dashboardSectionContentDetailsDiv()

  dashboardHolder.addEventListener('click', function () {
    showdropdown.classList.remove('show')
    setIsBookmarks(true)
    getIsBookmarks()

    mainContainer.classList.add('hideMainContainer')
    dashboardSection.classList.add('showDashboardSection')
    emptyDiv.classList.add('hideEmptyDiv')
    footer.classList.add('modifiyFooter')
    openTabHolder.classList.add('hideOpenTabHolder')

    // Ensure that only Bookmarks stays highlighted on opening of Dashboard
    dashboardSectionSidebarBookmark.classList.add('highlightedBookmark')
    dashboardSectionSidebarBookmarkText.classList.add('highlightedBookmarkText')
    dashboardSectionSidebarBookmarkIcon.style.display = 'none'
    dashboardSectionSidebarBookmarkIconSelected.style.display = 'block'

    // Remove highlighted Favorites
    dashboardSectionSidebarFavorite.classList.remove('highlightedFavorite')
    dashboardSectionSidebarFavoriteIcon.style.display = 'block'
    dashboardSectionSidebarFavoriteIconSelected.style.display = 'none'
    dashboardSectionSidebarFavoriteText.classList.remove('hightedFavoriteText')

    // Remove highlighted Collections
    dashboardSectionSidebarCollection.classList.remove('highlightedCollection')
    dashboardSectionSidebarCollectionIcon.style.display = 'block'
    dashboardSectionSidebarCollectionIconSelected.style.display = 'none'
    dashboardSectionSidebarCollectionText.classList.remove(
      'hightedCollectionText',
    )

    // Remove highlighted Links
    dashboardSectionSidebarLinks.classList.remove('highlightedLinks')
    dashboardSectionSidebarLinksIcon.style.display = 'block'
    dashboardSectionSidebarLinksIconSelected.style.display = 'none'
    dashboardSectionSidebarLinksText.classList.remove('hightedLinksText')

    // Remove highlighted Images
    dashboardSectionSidebarImages.classList.remove('highlightedImages')
    dashboardSectionSidebarImagesIcon.style.display = 'block'
    dashboardSectionSidebarImagesIconSelected.style.display = 'none'
    dashboardSectionSidebarImagesText.classList.remove('highlightedImagesText')

    // Remove highlighted Videos
    dashboardSectionSidebarVideos.classList.remove('highlightedVideos')
    dashboardSectionSidebarVideoIcon.style.display = 'block'
    dashboardSectionSidebarVideoIconSelected.style.display = 'none'
    dashboardSectionSidebarVideoText.classList.remove('highlightedVideoText')

    // Remove highlighted Articles
    dashboardSectionSidebarArticles.classList.remove('highlightedArticles')
    dashboardSectionSidebarArticlesIcon.style.display = 'block'
    dashboardSectionSidebarArticlesIconSelected.style.display = 'none'
    dashboardSectionSidebarArticlesText.classList.remove('highlightedArticles')

    if (getIsBookmarks()) {
      dashboardSectionContentHolder.style.display = 'flex'
      dashboardCardDisplay.style.display = 'none'
      dashboardFavorites.style.display = 'none'
      dashboardCollection.style.display = 'none'
      dashboardLinks.style.display = 'none'
      dashboardImages.style.display = 'none'
      dashboardVideos.style.display = 'none'
      dashboardArticles.style.display = 'none'
    }
  })

  dashboardSectionSidebarBookmark.addEventListener('click', function () {
    setIsBookmarks(true)
    dashboardSectionSidebarBookmark.classList.add('highlightedBookmark')
    dashboardSectionSidebarBookmarkIcon.style.display = 'none'
    dashboardSectionSidebarBookmarkIconSelected.style.display = 'block'
    dashboardSectionSidebarBookmarkText.classList.add('highlightedBookmarkText')

    // Remove highlighted Favorites
    dashboardSectionSidebarFavorite.classList.remove('highlightedFavorite')
    dashboardSectionSidebarFavoriteIcon.style.display = 'block'
    dashboardSectionSidebarFavoriteIconSelected.style.display = 'none'
    dashboardSectionSidebarFavoriteText.classList.remove('hightedFavoriteText')

    // Remove highlighted Collections
    dashboardSectionSidebarCollection.classList.remove('highlightedCollection')
    dashboardSectionSidebarCollectionIcon.style.display = 'block'
    dashboardSectionSidebarCollectionIconSelected.style.display = 'none'
    dashboardSectionSidebarCollectionText.classList.remove(
      'hightedCollectionText',
    )

    // Remove highted Links
    dashboardSectionSidebarLinks.classList.remove('highlightedLinks')
    dashboardSectionSidebarLinksIcon.style.display = 'block'
    dashboardSectionSidebarLinksIconSelected.style.display = 'none'
    dashboardSectionSidebarLinksText.classList.remove('hightedLinksText')

    // Remove highted Images
    dashboardSectionSidebarImages.classList.remove('highlightedImages')
    dashboardSectionSidebarImagesIcon.style.display = 'block'
    dashboardSectionSidebarImagesIconSelected.style.display = 'none'
    dashboardSectionSidebarImagesText.classList.remove('highlightedImagesText')

    // Remove highlighted Videos
    dashboardSectionSidebarVideos.classList.remove('highlightedVideos')
    dashboardSectionSidebarVideoIcon.style.display = 'block'
    dashboardSectionSidebarVideoIconSelected.style.display = 'none'
    dashboardSectionSidebarVideoText.classList.remove('highlightedVideoText')

    // Remove highlighted Articles
    dashboardSectionSidebarArticles.classList.remove('highlightedArticles')
    dashboardSectionSidebarArticlesIcon.style.display = 'block'
    dashboardSectionSidebarArticlesIconSelected.style.display = 'none'
    dashboardSectionSidebarArticlesText.classList.remove('highlightedArticles')

    if (getIsBookmarks()) {
      dashboardFavorites.style.display = 'none'
      dashboardCollection.style.display = 'none'
      dashboardLinks.style.display = 'none'
      dashboardImages.style.display = 'none'
      dashboardVideos.style.display = 'none'
      dashboardArticles.style.display = 'none'

      if (isListDetail) {
        dashboardSectionContentHolder.style.display = 'flex'
        dashboardCardDisplay.style.display = 'none'
      }

      if (isCardDetail) {
        dashboardCardDisplay.style.display = 'flex'
        dashboardSectionContentHolder.style.display = 'none'
      }
    }
  })

  dashboardSectionSidebarFavorite.addEventListener('click', function () {
    setIsFavorites(true)
    setIsBookmarks(false)
    setIsCollection(false)
    setIsLinks(false)
    setIsImages(false)
    setIsVideos(false)
    setIsArticles(false)

    dashboardSectionSidebarFavorite.classList.add('highlightedFavorite')
    dashboardSectionSidebarFavoriteText.classList.add('hightedFavoriteText')
    dashboardSectionSidebarFavoriteIcon.style.display = 'none'
    dashboardSectionSidebarFavoriteIconSelected.style.display = 'block'

    // Remove highlighted Bookmarks
    dashboardSectionSidebarBookmark.classList.remove('highlightedBookmark')
    dashboardSectionSidebarBookmarkIcon.style.display = 'block'
    dashboardSectionSidebarBookmarkIconSelected.style.display = 'none'
    dashboardSectionSidebarBookmarkText.classList.remove(
      'highlightedBookmarkText',
    )
    dashboardSectionSidebarBookmarkIcon.classList.remove(
      'highlightedSidebarBookmarkIcon',
    )

    // Remove highlighted Collections
    dashboardSectionSidebarCollection.classList.remove('highlightedCollection')
    dashboardSectionSidebarCollectionIcon.style.display = 'block'
    dashboardSectionSidebarCollectionIconSelected.style.display = 'none'
    dashboardSectionSidebarCollectionText.classList.remove(
      'hightedCollectionText',
    )

    // Remove highted Links
    dashboardSectionSidebarLinks.classList.remove('highlightedLinks')
    dashboardSectionSidebarLinksIcon.style.display = 'block'
    dashboardSectionSidebarLinksIconSelected.style.display = 'none'
    dashboardSectionSidebarLinksText.classList.remove('hightedLinksText')

    // Remove highted Images
    dashboardSectionSidebarImages.classList.remove('highlightedImages')
    dashboardSectionSidebarImagesIcon.style.display = 'block'
    dashboardSectionSidebarImagesIconSelected.style.display = 'none'
    dashboardSectionSidebarImagesText.classList.remove('highlightedImagesText')

    // Remove highlighted Videos
    dashboardSectionSidebarVideos.classList.remove('highlightedVideos')
    dashboardSectionSidebarVideoIcon.style.display = 'block'
    dashboardSectionSidebarVideoIconSelected.style.display = 'none'
    dashboardSectionSidebarVideoText.classList.remove('highlightedVideoText')

    // Remove highlighted Articles
    dashboardSectionSidebarArticles.classList.remove('highlightedArticles')
    dashboardSectionSidebarArticlesIcon.style.display = 'block'
    dashboardSectionSidebarArticlesIconSelected.style.display = 'none'
    dashboardSectionSidebarArticlesText.classList.remove('highlightedArticles')
    if (getIsFavorites()) {
      dashboardFavorites.style.display = 'flex'
      dashboardSectionContentHolder.style.display = 'none'
      dashboardCardDisplay.style.display = 'none'
      dashboardCollection.style.display = 'none'
      dashboardLinks.style.display = 'none'
      dashboardImages.style.display = 'none'
      dashboardVideos.style.display = 'none'
      dashboardArticles.style.display = 'none'
    }
  })

  dashboardSectionSidebarCollection.addEventListener('click', function () {
    setIsCollection(true)
    setIsFavorites(false)
    setIsBookmarks(false)
    setIsLinks(false)
    setIsImages(false)
    setIsVideos(false)
    setIsArticles(false)

    dashboardSectionSidebarCollection.classList.add('highlightedCollection')
    dashboardSectionSidebarCollectionIcon.style.display = 'none'
    dashboardSectionSidebarCollectionIconSelected.style.display = 'block'
    dashboardSectionSidebarCollectionText.classList.add('hightedCollectionText')

    // Remove highlighted Bookmarks
    dashboardSectionSidebarBookmark.classList.remove('highlightedBookmark')
    dashboardSectionSidebarBookmarkIcon.style.display = 'block'
    dashboardSectionSidebarBookmarkIconSelected.style.display = 'none'
    dashboardSectionSidebarBookmarkText.classList.remove(
      'highlightedBookmarkText',
    )
    dashboardSectionSidebarBookmarkIcon.classList.remove(
      'highlightedSidebarBookmarkIcon',
    )

    // Remove highlighted Favorites
    dashboardSectionSidebarFavorite.classList.remove('highlightedFavorite')
    dashboardSectionSidebarFavoriteIcon.style.display = 'block'
    dashboardSectionSidebarFavoriteIconSelected.style.display = 'none'
    dashboardSectionSidebarFavoriteText.classList.remove('hightedFavoriteText')

    // Remove highted Links
    dashboardSectionSidebarLinks.classList.remove('highlightedLinks')
    dashboardSectionSidebarLinksIcon.style.display = 'block'
    dashboardSectionSidebarLinksIconSelected.style.display = 'none'
    dashboardSectionSidebarLinksText.classList.remove('hightedLinksText')

    // Remove highted Images
    dashboardSectionSidebarImages.classList.remove('highlightedImages')
    dashboardSectionSidebarImagesIcon.style.display = 'block'
    dashboardSectionSidebarImagesIconSelected.style.display = 'none'
    dashboardSectionSidebarImagesText.classList.remove('highlightedImagesText')

    // Remove highlighted Videos
    dashboardSectionSidebarVideos.classList.remove('highlightedVideos')
    dashboardSectionSidebarVideoIcon.style.display = 'block'
    dashboardSectionSidebarVideoIconSelected.style.display = 'none'
    dashboardSectionSidebarVideoText.classList.remove('highlightedVideoText')

    // Remove highlighted Articles
    dashboardSectionSidebarArticles.classList.remove('highlightedArticles')
    dashboardSectionSidebarArticlesIcon.style.display = 'block'
    dashboardSectionSidebarArticlesIconSelected.style.display = 'none'
    dashboardSectionSidebarArticlesText.classList.remove('highlightedArticles')

    if (getIsCollection()) {
      dashboardCollection.style.display = 'flex'
      dashboardSectionContentHolder.style.display = 'none'
      dashboardCardDisplay.style.display = 'none'
      dashboardFavorites.style.display = 'none'
      dashboardLinks.style.display = 'none'
      dashboardImages.style.display = 'none'
      dashboardVideos.style.display = 'none'
      dashboardArticles.style.display = 'none'
    }
  })

  dashboardSectionSidebarLinks.addEventListener('click', function () {
    setIsLinks(true)
    setIsCollection(false)
    setIsFavorites(false)
    setIsBookmarks(false)
    setIsImages(false)
    setIsVideos(false)
    setIsArticles(false)

    dashboardSectionSidebarLinks.classList.add('highlightedLinks')
    dashboardSectionSidebarLinksIcon.style.display = 'none'
    dashboardSectionSidebarLinksIconSelected.style.display = 'block'
    dashboardSectionSidebarLinksText.classList.add('hightedLinksText')

    // Remove highlighted Bookmarks
    dashboardSectionSidebarBookmark.classList.remove('highlightedBookmark')
    dashboardSectionSidebarBookmarkIcon.style.display = 'block'
    dashboardSectionSidebarBookmarkIconSelected.style.display = 'none'
    dashboardSectionSidebarBookmarkText.classList.remove(
      'highlightedBookmarkText',
    )
    dashboardSectionSidebarBookmarkIcon.classList.remove(
      'highlightedSidebarBookmarkIcon',
    )

    // Remove highlighted Favorites
    dashboardSectionSidebarFavorite.classList.remove('highlightedFavorite')
    dashboardSectionSidebarFavoriteIcon.style.display = 'block'
    dashboardSectionSidebarFavoriteIconSelected.style.display = 'none'
    dashboardSectionSidebarFavoriteText.classList.remove('hightedFavoriteText')

    // Remove highlighted Collections
    dashboardSectionSidebarCollection.classList.remove('highlightedCollection')
    dashboardSectionSidebarCollectionIcon.style.display = 'block'
    dashboardSectionSidebarCollectionIconSelected.style.display = 'none'
    dashboardSectionSidebarCollectionText.classList.remove(
      'hightedCollectionText',
    )

    // Remove highted Images
    dashboardSectionSidebarImages.classList.remove('highlightedImages')
    dashboardSectionSidebarImagesIcon.style.display = 'block'
    dashboardSectionSidebarImagesIconSelected.style.display = 'none'
    dashboardSectionSidebarImagesText.classList.remove('highlightedImagesText')

    // Remove highlighted Videos
    dashboardSectionSidebarVideos.classList.remove('highlightedVideos')
    dashboardSectionSidebarVideoIcon.style.display = 'block'
    dashboardSectionSidebarVideoIconSelected.style.display = 'none'
    dashboardSectionSidebarVideoText.classList.remove('highlightedVideoText')

    // Remove highlighted Articles
    dashboardSectionSidebarArticles.classList.remove('highlightedArticles')
    dashboardSectionSidebarArticlesIcon.style.display = 'block'
    dashboardSectionSidebarArticlesIconSelected.style.display = 'none'
    dashboardSectionSidebarArticlesText.classList.remove('highlightedArticles')

    if (getIsLinks()) {
      dashboardLinks.style.display = 'flex'
      dashboardSectionContentHolder.style.display = 'none'
      dashboardCardDisplay.style.display = 'none'
      dashboardFavorites.style.display = 'none'
      dashboardCollection.style.display = 'none'
      dashboardImages.style.display = 'none'
      dashboardVideos.style.display = 'none'
      dashboardArticles.style.display = 'none'
    }
  })

  dashboardSectionSidebarImages.addEventListener('click', function () {
    setIsImages(true)
    setIsLinks(false)
    setIsCollection(false)
    setIsFavorites(false)
    setIsBookmarks(false)
    setIsVideos(false)
    setIsArticles(false)

    dashboardSectionSidebarImages.classList.add('highlightedImages')
    dashboardSectionSidebarImagesIcon.style.display = 'none'
    dashboardSectionSidebarImagesIconSelected.style.display = 'block'
    dashboardSectionSidebarImagesText.classList.add('highlightedImagesText')

    // Remove highlighted Bookmarks
    dashboardSectionSidebarBookmark.classList.remove('highlightedBookmark')
    dashboardSectionSidebarBookmarkIcon.style.display = 'block'
    dashboardSectionSidebarBookmarkIconSelected.style.display = 'none'
    dashboardSectionSidebarBookmarkText.classList.remove(
      'highlightedBookmarkText',
    )
    dashboardSectionSidebarBookmarkIcon.classList.remove(
      'highlightedSidebarBookmarkIcon',
    )

    // Remove highlighted Favorites
    dashboardSectionSidebarFavorite.classList.remove('highlightedFavorite')
    dashboardSectionSidebarFavoriteIcon.style.display = 'block'
    dashboardSectionSidebarFavoriteIconSelected.style.display = 'none'
    dashboardSectionSidebarFavoriteText.classList.remove('hightedFavoriteText')

    // Remove highlighted Collections
    dashboardSectionSidebarCollection.classList.remove('highlightedCollection')
    dashboardSectionSidebarCollectionIcon.style.display = 'block'
    dashboardSectionSidebarCollectionIconSelected.style.display = 'none'
    dashboardSectionSidebarCollectionText.classList.remove(
      'hightedCollectionText',
    )

    // Remove highted Links
    dashboardSectionSidebarLinks.classList.remove('highlightedLinks')
    dashboardSectionSidebarLinksIcon.style.display = 'block'
    dashboardSectionSidebarLinksIconSelected.style.display = 'none'
    dashboardSectionSidebarLinksText.classList.remove('hightedLinksText')

    // Remove highlighted Videos
    dashboardSectionSidebarVideos.classList.remove('highlightedVideos')
    dashboardSectionSidebarVideoIcon.style.display = 'block'
    dashboardSectionSidebarVideoIconSelected.style.display = 'none'
    dashboardSectionSidebarVideoText.classList.remove('highlightedVideoText')

    // Remove highlighted Articles
    dashboardSectionSidebarArticles.classList.remove('highlightedArticles')
    dashboardSectionSidebarArticlesIcon.style.display = 'block'
    dashboardSectionSidebarArticlesIconSelected.style.display = 'none'
    dashboardSectionSidebarArticlesText.classList.remove('highlightedArticles')

    if (getIsImages()) {
      dashboardImages.style.display = 'flex'
      dashboardSectionContentHolder.style.display = 'none'
      dashboardCardDisplay.style.display = 'none'
      dashboardFavorites.style.display = 'none'
      dashboardCollection.style.display = 'none'
      dashboardLinks.style.display = 'none'
      dashboardVideos.style.display = 'none'
      dashboardArticles.style.display = 'none'
    }
  })

  dashboardSectionSidebarVideos.addEventListener('click', function () {
    setIsVideos(true)
    setIsImages(false)
    setIsLinks(false)
    setIsCollection(false)
    setIsFavorites(false)
    setIsBookmarks(false)
    setIsArticles(false)

    dashboardSectionSidebarVideos.classList.add('highlightedVideos')
    dashboardSectionSidebarVideoIcon.style.display = 'none'
    dashboardSectionSidebarVideoIconSelected.style.display = 'block'
    dashboardSectionSidebarVideoText.classList.add('highlightedVideoText')

    // Remove highlighted Bookmarks
    dashboardSectionSidebarBookmark.classList.remove('highlightedBookmark')
    dashboardSectionSidebarBookmarkIcon.style.display = 'block'
    dashboardSectionSidebarBookmarkIconSelected.style.display = 'none'
    dashboardSectionSidebarBookmarkText.classList.remove(
      'highlightedBookmarkText',
    )
    dashboardSectionSidebarBookmarkIcon.classList.remove(
      'highlightedSidebarBookmarkIcon',
    )

    // Remove highlighted Favorites
    dashboardSectionSidebarFavorite.classList.remove('highlightedFavorite')
    dashboardSectionSidebarFavoriteIcon.style.display = 'block'
    dashboardSectionSidebarFavoriteIconSelected.style.display = 'none'
    dashboardSectionSidebarFavoriteText.classList.remove('hightedFavoriteText')

    // Remove highlighted Collections
    dashboardSectionSidebarCollection.classList.remove('highlightedCollection')
    dashboardSectionSidebarCollectionIcon.style.display = 'block'
    dashboardSectionSidebarCollectionIconSelected.style.display = 'none'
    dashboardSectionSidebarCollectionText.classList.remove(
      'hightedCollectionText',
    )

    // Remove highted Links
    dashboardSectionSidebarLinks.classList.remove('highlightedLinks')
    dashboardSectionSidebarLinksIcon.style.display = 'block'
    dashboardSectionSidebarLinksIconSelected.style.display = 'none'
    dashboardSectionSidebarLinksText.classList.remove('hightedLinksText')

    // Remove highted Images
    dashboardSectionSidebarImages.classList.remove('highlightedImages')
    dashboardSectionSidebarImagesIcon.style.display = 'block'
    dashboardSectionSidebarImagesIconSelected.style.display = 'none'
    dashboardSectionSidebarImagesText.classList.remove('highlightedImagesText')

    // Remove highlighted Articles
    dashboardSectionSidebarArticles.classList.remove('highlightedArticles')
    dashboardSectionSidebarArticlesIcon.style.display = 'block'
    dashboardSectionSidebarArticlesIconSelected.style.display = 'none'
    dashboardSectionSidebarArticlesText.classList.remove('highlightedArticles')

    if (getIsVideos()) {
      dashboardVideos.style.display = 'flex'
      dashboardSectionContentHolder.style.display = 'none'
      dashboardCardDisplay.style.display = 'none'
      dashboardFavorites.style.display = 'none'
      dashboardCollection.style.display = 'none'
      dashboardLinks.style.display = 'none'
      dashboardImages.style.display = 'none'
      dashboardArticles.style.display = 'none'
    }
  })

  dashboardSectionSidebarArticles.addEventListener('click', function () {
    setIsArticles(true)
    setIsVideos(false)
    setIsImages(false)
    setIsLinks(false)
    setIsCollection(false)
    setIsFavorites(false)
    setIsBookmarks(false)

    dashboardSectionSidebarArticles.classList.add('highlightedArticles')
    dashboardSectionSidebarArticlesIcon.style.display = 'none'
    dashboardSectionSidebarArticlesIconSelected.style.display = 'block'
    dashboardSectionSidebarArticlesText.classList.add('highlightedArticles')

    // Remove highlighted Bookmarks
    dashboardSectionSidebarBookmark.classList.remove('highlightedBookmark')
    dashboardSectionSidebarBookmarkIcon.style.display = 'block'
    dashboardSectionSidebarBookmarkIconSelected.style.display = 'none'
    dashboardSectionSidebarBookmarkText.classList.remove(
      'highlightedBookmarkText',
    )
    dashboardSectionSidebarBookmarkIcon.classList.remove(
      'highlightedSidebarBookmarkIcon',
    )

    // Remove highlighted Favorites
    dashboardSectionSidebarFavorite.classList.remove('highlightedFavorite')
    dashboardSectionSidebarFavoriteIcon.style.display = 'block'
    dashboardSectionSidebarFavoriteIconSelected.style.display = 'none'
    dashboardSectionSidebarFavoriteText.classList.remove('hightedFavoriteText')

    // Remove highlighted Collections
    dashboardSectionSidebarCollection.classList.remove('highlightedCollection')
    dashboardSectionSidebarCollectionIcon.style.display = 'block'
    dashboardSectionSidebarCollectionIconSelected.style.display = 'none'
    dashboardSectionSidebarCollectionText.classList.remove(
      'hightedCollectionText',
    )

    // Remove highted Links
    dashboardSectionSidebarLinks.classList.remove('highlightedLinks')
    dashboardSectionSidebarLinksIcon.style.display = 'block'
    dashboardSectionSidebarLinksIconSelected.style.display = 'none'
    dashboardSectionSidebarLinksText.classList.remove('hightedLinksText')

    // Remove highted Images
    dashboardSectionSidebarImages.classList.remove('highlightedImages')
    dashboardSectionSidebarImagesIcon.style.display = 'block'
    dashboardSectionSidebarImagesIconSelected.style.display = 'none'
    dashboardSectionSidebarImagesText.classList.remove('highlightedImagesText')

    // Remove highlighted Videos
    dashboardSectionSidebarVideos.classList.remove('highlightedVideos')
    dashboardSectionSidebarVideoIcon.style.display = 'block'
    dashboardSectionSidebarVideoIconSelected.style.display = 'none'
    dashboardSectionSidebarVideoText.classList.remove('highlightedVideoText')

    if (getIsArticles()) {
      dashboardArticles.style.display = 'flex'
      dashboardSectionContentHolder.style.display = 'none'
      dashboardCardDisplay.style.display = 'none'
      dashboardFavorites.style.display = 'none'
      dashboardCollection.style.display = 'none'
      dashboardLinks.style.display = 'none'
      dashboardImages.style.display = 'none'
      dashboardVideos.style.display = 'none'
    }
  })

  filterByTag()
  recentNameSort()
}
