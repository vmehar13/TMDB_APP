import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../../components/SearchBar'
import { GetMoviesListApi, GetSearchMoviesListApi } from '../../redux/actions/moviesActions'
import MovieCard from '../../components/MovieCard'
import styles from './styles'
import { COLORS } from '../../constants'

const Home = ({ GetMoviesListApi,GetSearchMoviesListApi, navigation,moviesList, searchMoviesList }) => {

  const [searchQuery, setSearchQuery] = useState("")
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    GetMoviesListApi(pageNo, (data) => setPageNo(data)) 
  }, [])

  return (
    <View style={styles.base}>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
      <SearchBar value={searchQuery} onChangeText={(text) => {GetSearchMoviesListApi(text), setSearchQuery(text)}} />
      <FlatList
        disableVirtualization={true}
        showsVerticalScrollIndicator={false}
        animated
        onEndReached={() => searchQuery.length <= 0 ?  GetMoviesListApi(pageNo, (data) => setPageNo(data)) : () => {} }
        data={searchQuery.length > 0 ? searchMoviesList : moviesList}
        contentContainerStyle={styles.moviesList}
        keyExtractor={(item, index) => index.toString().trim()}
        renderItem={({ item, index }) => {
          return <MovieCard data={item} onPress={() => navigation.navigate("MovieDetail", {data: item})} />
        }
        }
      />
      {/* <TouchableOpacity
        onPress={() => GetMoviesListApi(pageNo, (data) => setPageNo(data))}
      >
      <Text style={styles.loadMore}>Load More</Text>
      </TouchableOpacity> */}
    </View>
  )
}
const mapStateToProps = (state) => ({
  moviesList: state.movies.moviesList,
  searchMoviesList: state.movies.searchMoviesList
})

const mapDispatchToProps = {
  GetMoviesListApi,
  GetSearchMoviesListApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)