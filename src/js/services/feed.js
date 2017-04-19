export default class Feed {

	static fetch(props) {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', props.url, true);
		xhr.send();

		xhr.onreadystatechange = function() {
			if (this.readyState != 4) return;

			if (this.status != 200) {
				props.error && props.error({
					status  : 'error',
					message : this.statusText
				});

				return;
			}

			const response = JSON.parse(this.responseText);

			if(response.status !== 'ok') {
				props.error && props.error({
					status  : 'error',
					message : response.message
				})

				return;
			}

			props.success && props.success({
				status   : 'success',
				title    : response.feed.title,
				url      : response.feed.link,
				articles : response.items.map(article => {
					return {
						datatime    : article.pubDate,
						title       : article.title,
						url			: article.link,
						description : article.description.replace(/<\/?[^>]+(>|$)|(?:\r\n|\r|\n)/gi, '')
					}
				})
			});
		}

		return xhr;
	}
}
