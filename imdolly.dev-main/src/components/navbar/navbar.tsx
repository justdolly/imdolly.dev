import styles from "./navbar.module.css";

export default function () {
	return (
		<div class={styles.navbar}>
			<a class={styles.link} href="/">
				Home
			</a>
			<a class={styles.link} href="/projects">
				Projects
			</a>
			<a class={styles.link} href="https://imdolly.dev/Blog">
				Blog
			</a>
		</div>
	);
}
