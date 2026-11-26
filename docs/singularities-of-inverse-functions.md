# 역함수의 특이점

# 개요

**역함수의 특이점(singularities of the inverse function)** 은 유리형함수 $f$ 의 역함수를 값 쪽에서 해석적으로 이어 갈 때 더 이어지지 않는 자리다. $f(z)=z^2$ 의 역함수 $\sqrt w$ 는 $w=0$ 둘레를 한 번 돌면 부호가 바뀌고, $f(z)=e^z$ 의 역함수 $\log w$ 는 $w$ 가 $0$ 으로 가면 값이 무한대로 달아난다.

Iversen 은 앞의 것을 $f$ 가 그 값을 취하는 점에서 생기는 특이점으로, 뒤의 것을 무한대로 가는 길에서 생기는 특이점으로 나누었다. 뒤의 것은 그 길 근방에서 $f$ 가 그 값을 취하는지로 다시 나누고, 이 분류로 역함수가 어떤 꼴로 막히는지 가린다.

# 직관

$f(z)=e^z$ 에서 $w=1$ 근처의 $\log w$ 한 가지를 잡고 $w$ 를 $0$ 쪽으로 옮긴다. $w=\varepsilon$ 이면 $z=\log\varepsilon$ 이므로 $\varepsilon\to 0$ 에서 $z$ 는 음의 실축을 따라 무한대로 간다. 원판 $\vert w\vert\lt\varepsilon$ 의 역상은 반평면 $\mathrm{Re}\thinspace z\lt\log\varepsilon$ 이고, 이 반평면 안에서 $e^z$ 는 $0$ 을 취하지 않는다.

$g(z)=\sin z/z$ 도 양의 실축을 따라 $0$ 으로 간다. $x\gt 1/\varepsilon$ 이면 $\vert g(x)\vert\lt\varepsilon$ 이므로, 원판 $\vert w\vert\lt\varepsilon$ 의 역상에서 이 반직선을 담는 연결 성분은 영점 $\pi,2\pi,3\pi,\dots$ 가운데 $1/\varepsilon$ 보다 큰 것을 전부 담는다. $\varepsilon$ 을 아무리 작게 해도 그 성분에서 $g$ 는 $0$ 을 취한다.

두 함수 모두 역함수를 $0$ 쪽으로 이으면 무한대로 달아나지만, $e^z$ 는 그 근방에서 $0$ 을 피하고 $g$ 는 피하지 못한다.

# 정의

$f$ 가 복소평면에서 유리형이고 $a$ 가 복소수다. $r\gt 0$ 마다 원판 $D(a,r)=\lbrace w:\vert w-a\vert\lt r\rbrace$ 의 역상 $f^{-1}(D(a,r))$ 의 연결 성분 $U(r)$ 을 하나씩, $r\_1\lt r\_2$ 이면 $U(r\_1)\subset U(r\_2)$ 가 되게 고른다.

$\bigcap\_{r\gt 0}U(r)$ 이 한 점 $z\_0$ 이면 $f(z\_0)=a$ 다. $f'(z\_0)=0$ 이면 $z\_0$ 을 임계점(critical point), $a$ 를 임계값(critical value)이라 하고, 이 고름을 $f^{-1}$ 의 **대수적 특이점(algebraic singularity)** 이라 한다. 직관 절의 $z^2$ 에서 $w=0$ 이 그렇다.

$\bigcap\_{r\gt 0}U(r)=\varnothing$ 이면 이 고름 $r\mapsto U(r)$ 을 $a$ 위의 $f^{-1}$ 의 **초월 특이점(transcendental singularity)** 이라 한다. 초월 특이점은 다음 셋으로 나눈다[^1].

- **직접 특이점(direct singularity)**. 어떤 $r$ 에서 $U(r)$ 안의 모든 점이 $f(z)\ne a$ 를 만족한다.
- **간접 특이점(indirect singularity)**. 직접 특이점이 아닌 초월 특이점이다.
- **로그 특이점(logarithmic singularity)**. 어떤 $r$ 에서 $f:U(r)\to D(a,r)\setminus\lbrace a\rbrace$ 가 보편 덮개(universal covering)다.

직관 절의 $e^z$ 에서 $U(\varepsilon)$ 은 반평면 $\mathrm{Re}\thinspace z\lt\log\varepsilon$ 이고, $e^z$ 는 이 반평면을 구멍 뚫린 원판 위로 보내며 원판 둘레를 한 번 돌 때마다 $z$ 가 $2\pi i$ 만큼 옮겨 간다. 그러므로 $0$ 위의 로그 특이점이다. $g(z)=\sin z/z$ 의 $U(\varepsilon)$ 은 영점을 담으므로 $0$ 위의 간접 특이점이다.

로그 특이점은 직접 특이점이다. $a=\infty$ 일 때는 $D(a,r)$ 대신 $\lbrace\vert w\vert\gt 1/r\rbrace$ 를 쓴다.

# 성질

## 점근값과의 대응

정리. $a$ 위에 $f^{-1}$ 의 초월 특이점이 있는 것과 $a$ 가 $f$ 의 점근값인 것은 동치다[^1].

점근값은 무한대로 가는 곡선을 따라 $f$ 가 다가가는 값이며 [Denjoy–Carleman–Ahlfors 정리](denjoy-carleman-ahlfors-theorem.md)에서 정의된다. 증명의 요지. 초월 특이점이 있으면 $U(1/n)$ 마다 점 $z\_n$ 을 고르고 $z\_n$ 과 $z\_{n+1}$ 을 $U(1/n)$ 안의 경로로 잇는다. $\bigcap U(r)=\varnothing$ 이므로 이 곡선은 무한대로 가고, 그 위에서 $f\to a$ 다. 거꾸로 곡선 $\gamma$ 를 따라 $f\to a$ 이면 $\gamma$ 의 꼬리를 담는 성분을 $U(r)$ 로 고른다.

## Iversen 정리

정리. 초월 유리형함수 $f$ 가 값 $a$ 를 취하지 않으면 $a$ 는 점근값이고, $a$ 위의 초월 특이점은 직접 특이점이다. 초월 전해석함수에서 $\infty$ 는 언제나 점근값이다[^2].

증명의 요지. $f\ne a$ 이므로 $h=1/(f-a)$ 는 정칙이고, $f^{-1}(D(a,r))$ 의 성분 $U$ 위에서 $\vert h\vert\gt 1/r$, 경계에서 $\vert h\vert=1/r$ 이다. $U$ 가 유계이면 [최대 절댓값 원리](maximum-modulus-principle.md)에 어긋나므로 $U$ 는 유계가 아니다. 이 논법을 줄어드는 $r$ 에 되풀이해 겹쳐지는 성분 $U(r)$ 을 고른다. 한 점 $z\_0$ 이 모든 $U(r)$ 에 들면 $f(z\_0)=a$ 이므로 교집합은 비어 있고, 이렇게 고른 $U(r)$ 이 초월 특이점이다.

$\infty$ 는 $\lbrace\vert f\vert\gt R\rbrace$ 의 성분에 같은 논법을 쓴다.

[Picard 정리](picard-theorems.md)에서 초월 전해석함수가 피하는 유한값은 많아야 하나이고, 이 정리에서 그 값은 $\infty$ 와 함께 점근값이다. $e^z$ 의 $0$ 과 $\infty$ 가 그 예다.

## Bergweiler–Eremenko 정리

정리. $f$ 가 위수 유한한 초월 유리형함수이고 $A$ 가 $f$ 의 임계값과 점근값을 모은 집합이면, $A$ 의 고립점 위의 초월 특이점은 모두 로그 특이점이다[^3].

그러므로 위수가 유한하면 간접 특이점은 임계값이나 점근값이 쌓이는 값 위에만 있다. 직관 절의 $g(z)=\sin z/z$ 는 위수 $1$ 이고, 임계점이 $\tan x=x$ 의 근 $x\_n$ 근처에 있어 임계값 $g(x\_n)$ 이 $0$ 으로 쌓인다. 위수가 무한한 함수에서는 이 정리가 성립하지 않는 예가 있다[^3].

# 활용

- 점근값의 개수. Denjoy–Carleman–Ahlfors 정리는 위수 $\rho$ 인 전해석함수의 유한 점근값, 곧 초월 특이점이 놓이는 유한값이 많아야 $2\rho$ 개라는 정리다.
- 초월함수의 동역학. 임계값과 점근값이 유한 개인 전해석함수의 모임을 Speiser 류(Speiser class)라 하고, 특이값이 유계인 함수 전체인 [Eremenko–Lyubich 류](eremenko-lyubich-class.md)의 부분 모임이다. 이 모임의 함수는 [Fatou 성분의 분류](fatou-components.md)에서 떠도는 성분(wandering domain)을 갖지 않는다[^4].
- [Riemann 곡면](riemann-surfaces.md)의 꼴. $f$ 의 값 위에 펼친 Riemann 곡면을 특이점이 놓이는 값과 그 위의 특이점의 꼴로 기술하고, 그 곡면이 평면과 원판 가운데 어느 것과 등각인지를 이 기술로 판정한다[^1].

[^1]: R. Nevanlinna, *Analytic Functions*, Springer (1970).
[^2]: F. Iversen, *Recherches sur les fonctions inverses des fonctions méromorphes*, thèse, Helsingfors (1914).
[^3]: W. Bergweiler, A. Eremenko, "On the singularities of the inverse to a meromorphic function of finite order", *Revista Matemática Iberoamericana* 11 (1995), 355–373.
[^4]: A. E. Eremenko, M. Yu. Lyubich, "Dynamical properties of some classes of entire functions", *Annales de l'Institut Fourier* 42 (1992), 989–1020.

# 연관 문서

## 선수지식

- [해석적 연속](analytic-continuation.md)
- [Picard 정리](picard-theorems.md)

## 더 알아보기

- [Eremenko–Lyubich 류](eremenko-lyubich-class.md)

#complex_analysis #analysis
