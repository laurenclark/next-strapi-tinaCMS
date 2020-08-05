import Head from 'next/head'

import Container from '../components/ui/container'
import Layout from '../components/layouts/layout'
import Header from '../components/globals/header'

export default function Index({ allPosts }) {
    return (
        <>
            <Layout>
                <Head />
                <Header />
                <Container>
                    <h1>Example</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    a enim ac turpis maximus auctor pharetra non tellus. Vivamus
                    tincidunt molestie nisi, efficitur vestibulum libero
                    fermentum quis. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nullam non
                    rhoncus sapien, at luctus ante. Curabitur in dapibus nulla.
                    Vestibulum mi dolor, egestas a varius ac, sodales ac metus.
                    In et eros semper enim finibus egestas non et massa. Nam
                    eget fringilla elit. Quisque id leo tempus, consectetur nunc
                    ut, varius ligula. Vestibulum ut orci efficitur, finibus
                    risus quis, tempus erat. Sed finibus dapibus sem, non
                    lobortis erat congue convallis. Suspendisse fringilla, massa
                    quis cursus scelerisque, dolor nulla convallis sem, quis
                    pretium arcu enim eget dolor. Curabitur dictum vestibulum
                    sapien at efficitur. Nam mollis felis nec est condimentum,
                    quis semper felis tincidunt. Suspendisse sed libero augue.
                    Sed malesuada metus sit amet interdum rutrum. Morbi turpis
                    augue, dictum quis volutpat sit amet, pretium aliquam
                    ligula. Suspendisse magna risus, dictum eu nisl a, blandit
                    sodales lorem. Curabitur orci massa, lobortis et posuere sit
                    amet, viverra in massa. Aenean sollicitudin, leo quis
                    volutpat ultrices, ipsum turpis consequat ipsum, quis
                    rhoncus libero diam eget nulla. Donec ultrices orci vel
                    lacus luctus, vel ullamcorper enim ornare. In ac orci
                    egestas, vulputate erat a, facilisis odio. Morbi libero
                    velit, vulputate quis eros at, sagittis facilisis ex. Nulla
                    id dictum velit, quis euismod ligula. Integer ornare, tellus
                    eu vulputate tincidunt, augue mauris luctus leo, eu cursus
                    nulla neque quis orci. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae;
                    Quisque hendrerit tortor ut felis auctor, id suscipit quam
                    dignissim. Aliquam molestie ex id libero ultrices, vitae
                    congue purus blandit. Duis sagittis eros eget ex semper, et
                    ultricies purus ultricies. Morbi euismod tincidunt libero id
                    auctor. Aenean maximus sem neque, ac rutrum ex sollicitudin
                    sed. Nam eleifend magna nec eros commodo, sed condimentum
                    sem convallis. Sed egestas aliquam felis id egestas.
                    Suspendisse ornare lobortis est sollicitudin ultrices. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor mattis tortor aliquam dictum. Suspendisse
                    potenti. Nam scelerisque, ante id cursus laoreet, nibh lorem
                    sollicitudin ipsum, vel vehicula velit sem at risus.
                    Curabitur lacinia arcu ac dui convallis, ut tempor odio
                    facilisis. Suspendisse viverra, elit at pellentesque
                    pretium, tellus nibh bibendum felis, in lacinia purus libero
                    porttitor tortor. Quisque diam massa, blandit ac diam sed,
                    imperdiet malesuada tortor. Duis fringilla, massa et
                    eleifend elementum, libero felis sodales erat, non rutrum
                    arcu dui lobortis nibh. Aliquam quis elementum velit. Duis
                    ut orci malesuada, consectetur risus et, eleifend ligula.
                    Nullam gravida, libero sed bibendum blandit, odio est
                    tristique nibh, in tincidunt enim massa aliquam justo.
                    Mauris vestibulum commodo dui, id scelerisque augue volutpat
                    vel. Cras nec tellus fringilla, cursus nulla eu, venenatis
                    tortor. Donec vulputate nisl et felis sodales, vitae
                    vestibulum ante hendrerit. Nunc felis ante, semper a est sit
                    amet, eleifend molestie libero. Vestibulum laoreet lacinia
                    ornare. Mauris varius mi sit amet felis facilisis facilisis.
                    Nam non sem ipsum. Sed sed blandit quam. Vivamus sagittis
                    mollis luctus. Quisque iaculis elit eget libero fermentum
                    vehicula. Suspendisse sed leo ipsum. Nunc ornare magna
                    facilisis ligula tincidunt, in condimentum dui vehicula.
                </Container>
            </Layout>
        </>
    )
}
