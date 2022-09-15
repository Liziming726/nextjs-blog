/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-15 20:06:29
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-15 21:06:33
 * @FilePath: \farreli\pages\posts\[id].js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return ( 
    <Layout>
    <Head>
    <title>{postData.title}</title>
    </Head>
    <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
  </Layout>
  )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }