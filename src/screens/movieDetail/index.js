import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './styles'
import { images } from '../../constants'
import imageConnect from '../../services/imageConnect'
import { GetMovieDetailApi } from '../../redux/actions/moviesActions'
import Loading from '../../components/Loading'

const MovieDetail = ({ GetMovieDetailApi, movieDetail, loading, navigation, route }) => {


  useEffect(() => {
    GetMovieDetailApi(route.params.data.id)
  },[])

  return (
    <>
    {loading || !movieDetail?
      <Loading />
    :
    <ScrollView contentContainerStyle={styles.base}
      showsVerticalScrollIndicator={false}
    >
      <Image source={movieDetail?.poster_path ? { uri: imageConnect(movieDetail.poster_path) } : images.cancelImg1} style={styles.hostelCardImage} 
        defaultSource={images.noData}
      />

      <View style={styles.hostelCardTextSection}>
        <Text style={styles.hostelTitle} >{movieDetail.title}</Text>
        <Text style={styles.hostelDescription}>{movieDetail.overview}</Text>
        <Text style={styles.hostelPrice} >Release Date: {movieDetail?.release_date}</Text>
        <Text style={styles.hostelPrice} >Popularity: {movieDetail?.popularity}</Text>
        <Text style={styles.hostelPrice} >Popularity: {movieDetail?.popularity}</Text>
        <Text style={styles.hostelPrice} >Runtime: {movieDetail?.runtime}</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Text style={styles.hostelPrice} >Genres: </Text>
          {movieDetail?.genres?.map((item, index) => {
          return <Text style={styles.genere} >{item?.name}</Text>
          })}
        </View>
      </View>
    </ScrollView>
  }
    </>
  )
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movieDetail: state.movies.movieDetail,
})

const mapDispatchToProps = {
  GetMovieDetailApi
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)