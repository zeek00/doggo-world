
type PageProps = {
    params: Promise<{group: string}>;
}

export default async function PetGroupPage({params} : PageProps) {
    const {group} = await params;

    return (<p>{group}</p>);


}