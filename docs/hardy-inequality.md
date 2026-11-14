# Hardy 부등식

# 개요

**Hardy 부등식(Hardy's inequality)** 은 수열이나 함수의 누적 평균이 원래 것보다 크게 커지지 않는다는 부등식이다. 날마다의 판매량 $a_1,a_2,\dots$ 에서 첫날부터 그날까지의 평균 $A_n$ 을 매일 적으면, 판매량의 제곱의 합이 유한할 때 평균의 제곱의 합도 유한한지 묻게 된다. 이 부등식은 평균을 밀어 놓은 사본들의 평균으로 다시 써서, 지수 $p\gt 1$ 이면 평균의 $p$ 제곱 합이 원래 합의 $(p/(p-1))^p$ 배를 넘지 않는다고 답한다.

# 직관

첫날에만 $1$ 을 팔고 그 뒤로는 팔지 않은 수열 $a=(1,0,0,\dots)$ 을 본다. 누적 평균은 $A_n=1/n$ 이다. $\sum a_n^p=1$ 이지만 $\sum A_n^p=\sum 1/n^p$ 는 $p\gt 1$ 일 때만 수렴한다. $p=1$ 이면 조화급수가 발산하므로 지수는 $1$ 보다 커야 한다.

평균이 원래 수열보다 몇 배 커질 수 있는지 보려면 천천히 줄어드는 수열 $a_k=k^{-\beta}$, $0\lt\beta\lt 1$ 을 넣는다. 합을 적분으로 어림하면 다음과 같다.

$$
A_n=\frac1n\sum_{k=1}^n k^{-\beta}\approx\frac1n\cdot\frac{n^{1-\beta}}{1-\beta}=\frac{a_n}{1-\beta}
$$

$\sum a_n^p$ 가 수렴하려면 $\beta\gt 1/p$ 이어야 하고, $\beta$ 를 $1/p$ 에 가깝게 잡으면 $A_n/a_n$ 이 $1/(1-1/p)=p/(p-1)$ 에 가까워진다. 그러므로 $\sum A_n^p\le C\sum a_n^p$ 꼴의 부등식에서 $C$ 는 $(p/(p-1))^p$ 보다 작을 수 없다.

# 정의

$(0,\infty)$ 위의 국소 적분가능한 함수 $f$ 에 대해 다음 함수를 $f$ 의 **Hardy 평균(Hardy average)** 이라 하고, $f\mapsto Hf$ 를 **Hardy 작용소(Hardy operator)** 라 한다.

$$
Hf(x)=\frac1x\int_0^x f(t)\thinspace dt
$$

음이 아닌 수열 $a_1,a_2,\dots$ 의 누적 평균 $A_n=(a_1+\dots+a_n)/n$ 이 이 정의의 이산판이다. $f=\mathbf 1\_{(0,1\rbrack}$ 이면 $0\lt x\le 1$ 에서 $Hf(x)=1$ 이고 $x\gt 1$ 에서 $Hf(x)=1/x$ 이며, 직관 절의 $a=(1,0,0,\dots)$ 과 같은 꼴이다.

# 성질

## 적분 꼴

$1\lt p\lt\infty$ 이고 $f\in L^p(0,\infty)$ 이면 다음이 성립한다.

$$
\Vert Hf\Vert\_p\le\frac{p}{p-1}\Vert f\Vert\_p
$$

증명은 변수를 $t=xs$ 로 바꾸어 $Hf(x)=\int_0^1 f(xs)\thinspace ds$ 로 쓰는 것이다. $Hf$ 는 $f$ 를 비율 $s$ 로 늘인 함수들의 평균이다. 늘인 함수의 노름은 $\Vert f(\cdot\thinspace s)\Vert\_p=s^{-1/p}\Vert f\Vert\_p$ 이므로, [Minkowski 적분 부등식](minkowski-integral-inequality.md)이 다음을 준다.

$$
\Vert Hf\Vert\_p\le\int_0^1 s^{-1/p}\thinspace ds\cdot\Vert f\Vert\_p=\frac{p}{p-1}\Vert f\Vert\_p
$$

## 수열 꼴

$1\lt p\lt\infty$ 이고 $a_n\ge 0$ 이면 다음이 성립한다[^1].

$$
\sum_{n=1}^\infty A_n^p\le\Bigl(\frac{p}{p-1}\Bigr)^p\sum_{n=1}^\infty a_n^p
$$

직관 절의 계산에 따라 이 상수는 줄일 수 없고, 수열이 $0$ 이 아니면 등호가 성립하지 않는다[^1].

## 쌍대 꼴

$H$ 의 쌍대 작용소는 $H^\ast g(t)=\int_t^\infty g(x)/x\thinspace dx$ 이다. $\int_0^\infty Hf\cdot g=\int_0^\infty f\cdot H^\ast g$ 는 [Fubini–Tonelli 정리](fubini-tonelli.md)로 적분 순서를 바꾼 등식이다. 켤레 지수 $p'$ 에서 $\Vert H^\ast g\Vert\_{p'}\le\frac{p}{p-1}\Vert g\Vert\_{p'}$ 가 적분 꼴과 동치다.

# 활용

- 경계값이 $0$ 인 함수의 추정. $u(0)=0$ 이고 $u'\in L^2(0,\infty)$ 이면 $u(x)/x=Hu'(x)$ 이므로 $p=2$ 의 적분 꼴이 다음을 준다. 원점에서 $0$ 인 함수가 원점 근처에서 $x$ 에 비해 얼마나 커질 수 있는지를 도함수의 크기로 누르는 추정이다.

$$
\int_0^\infty\frac{u(x)^2}{x^2}\thinspace dx\le 4\int_0^\infty u'(x)^2\thinspace dx
$$

- Carleman 의 부등식(Carleman's inequality). 수열 꼴에서 $a_n$ 을 $a_n^{1/p}$ 로 바꾸고 $p\to\infty$ 로 보내면 $\bigl((a_1^{1/p}+\dots+a_n^{1/p})/n\bigr)^p$ 가 기하평균 $(a_1\cdots a_n)^{1/n}$ 으로 가고 상수가 $e$ 로 간다. 그 결과가 $\sum_n(a_1\cdots a_n)^{1/n}\le e\sum_n a_n$ 이다.
- [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md). $f$ 가 $(0,\infty)$ 에서 감소하면 원점에 한 끝을 둔 구간의 평균이 가장 크므로 $Mf$ 와 $Hf$ 가 상수배 안에서 같다.

[^1]: G. H. Hardy, J. E. Littlewood, G. Pólya, Inequalities, 2nd ed., Cambridge University Press (1952), Theorem 326.

# 연관 문서

## 선수지식

- [Minkowski 적분 부등식](minkowski-integral-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
