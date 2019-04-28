const e = React.createElement;

function othersProject() {
    return data.map(function value(value) {
        return e('div', { className: 'column col-4 col-sm-12 pointer', onClick: () => window.open(value.url) },
            e('div', { className: 'tile tile-centered' },
                [
                    e('div', { className: 'tile-content' },
                        [
                            e('div', { className: 'tile-title' },
                                value.title
                            ),
                            e('small', { className: 'tile-subtitle text-gray' },
                                'Public · ' + value.date
                            ),
                        ]
                    ),
                    e('div', { className: 'tile-action' },
                        e('i', { className: 'material-icons' },
                            'chevron_right'
                        )
                    ),
                ]
            )
        )
    })
}


ReactDOM.render(
    e('div', { className: 'columns' }, othersProject()),
    document.getElementById('more_project')
);
