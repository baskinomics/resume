

/**
 * todo seperate the entry with links out to its own component.
 * @param {*} param0 
 */
const ExperienceEntryBnl = ({ title, organization, dates, summary }) => {
    return (
        <CustomExperienceEntry>
            {
                summary.map(e => (
                    <ListElement key={e.id} text={e.text} />
                ))
            }
            <Element>
                <Text>
                    Authored blog posts&nbsp;
                <Link src="http://bnlconsulting.com/blog/cloud-first/">Cloud-First Microservices: AWS API Gateway and Lambda in Action</Link>
                    &nbsp;and&nbsp;
                <Link src="http://bnlconsulting.com/blog/visualizing-clusters-with-arcgis-for-flex/">Visualizing Clusters with ArcGIS for Flex</Link>.
              </Text>
            </Element>
        </CustomExperienceEntry>
    );
};