import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import Banner from '../components/Banner'
import WebPlayer from '../components/WebPlayer'
import GridContainer from '../components/GridContainer/'
import WelcomeSection from '../components/WelcomeSection/'
import DiscoverSection from '../components/DiscoverSection/'
import { getNewReleases, getTopArtists, getUserDetails } from '../redux/actions'

const Homepage = () => {
  const dispatch = useDispatch()
  const newReleases = useSelector((state) => state.newReleases)
  const topArtists = useSelector((state) => state.topArtists)

  // FETCH DATA ON FIRST RENDER
  useEffect(() => {
    dispatch(getUserDetails())
    dispatch(getNewReleases())
    dispatch(getTopArtists())
  }, [dispatch])

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner />
        <GridContainer>
          <WelcomeSection />
          <DiscoverSection title={('new_releases')} data={newReleases} />
          <DiscoverSection
            title={('top_artists')}
            data={topArtists}
            isArtist
          />
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default Homepage
