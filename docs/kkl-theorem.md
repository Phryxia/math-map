# Kahn–Kalai–Linial 정리

# 개요

**Kahn–Kalai–Linial 정리(Kahn–Kalai–Linial theorem)** 는 공정한 투표 규칙에는 결과에 큰 영향을 주는 사람이 반드시 있다는 정리다. $n$ 명이 각자 $\pm 1$ 을 내서 공정한 동전 하나를 정할 때, 다수결에서는 한 사람이 결과를 뒤집을 확률이 $1/\sqrt n$ 정도이고, 규칙을 바꿔 이 확률을 얼마나 작게 만들 수 있는지가 문제다. 이 정리는 결과가 반반에 가까운 규칙이라면 어떤 사람의 영향력은 $\log n/n$ 규모 이상임을 보인다.

# 직관

정리의 대상은 $n$ 개의 $\pm 1$ 입력을 받는 부울 함수 가운데 균형에 가까운 것이다. 세 사람의 이름 첫 글자를 따 KKL(Kahn–Kalai–Linial) 정리라고도 한다. 증명은 [부울 함수의 Fourier 해석](boolean-fourier.md)의 초축약성을 쓴다.

$n$ 명이 각자 $\pm 1$ 을 내고 그 결과로 공정한 동전 하나를 정하는 규칙 $f$ 를 만든다. 한 사람이 자기 표를 바꿔 결과를 뒤집을 수 있는 확률을 그 사람의 영향력이라 한다. 영향력이 큰 사람이 있으면 그 사람이 결과를 조종할 수 있으므로 모든 사람의 영향력을 작게 하고 싶다.

다수결에서 한 사람이 결과를 뒤집으려면 나머지 $n-1$ 명이 정확히 반반으로 갈려야 하고, 그 확률은 $\sqrt{2/(\pi n)}$ 정도다. 모든 사람의 영향력이 $1/\sqrt n$ 규모이고 독재자의 $1$ 보다 훨씬 작다.

영향력을 다 더하면 적어도 $1$ 이다. 그래서 $n$ 명이 똑같이 나누면 한 사람당 $1/n$ 까지 내려갈 수 있을 것 같다. Kahn–Kalai–Linial 정리는 $1/n$ 에 도달할 수 없고 어떤 규칙이든 영향력이 $\log n/n$ 규모 이상인 사람이 있다고 진술한다.

# 정의

$f\colon\lbrace -1,1\rbrace^n\to\lbrace -1,1\rbrace$ 를 균등분포 위의 부울 함수라 하고 Fourier 전개를 $f=\sum_S\hat f(S)x_S$ 라 하자. $x^{\oplus i}$ 는 $x$ 의 $i$ 번째 좌표를 뒤집은 것이다.

좌표 $i$ 의 **영향력(influence)** 과 **총 영향력(total influence)** 은 다음이다.

$$
\mathrm{Inf}\_i\lbrack f\rbrack=\Pr\_x\bigl\lbrack f(x)\ne f(x^{\oplus i})\bigr\rbrack=\sum_{S\ni i}\hat f(S)^2,\qquad \mathbf I\lbrack f\rbrack=\sum_{i=1}^n\mathrm{Inf}\_i\lbrack f\rbrack=\sum_S\vert S\vert\thinspace\hat f(S)^2
$$

분산은 $\mathrm{Var}\lbrack f\rbrack=\sum_{S\ne\varnothing}\hat f(S)^2$ 이므로 $\mathrm{Var}\lbrack f\rbrack\le\mathbf I\lbrack f\rbrack$ 이다. 이 부등식을 초입방체의 Poincaré 부등식(Poincaré inequality)이라 한다.

# 성질

## 정리의 진술

$n$ 과 $f$ 에 무관한 상수 $c\gt 0$ 이 있어 모든 $f$ 에 대해 다음이 성립한다[^1].

$$
\max_i\mathrm{Inf}\_i\lbrack f\rbrack\ge c\thinspace\mathrm{Var}\lbrack f\rbrack\frac{\log n}{n}
$$

## 초축약성을 쓴 증명

$\delta=\max_i\mathrm{Inf}\_i\lbrack f\rbrack$ 로 두고 $\mathbf I\lbrack f\rbrack$ 의 크기로 경우를 나눈다.

$\mathbf I\lbrack f\rbrack\ge c'\mathrm{Var}\lbrack f\rbrack\log n$ 이면 $\delta\ge\mathbf I\lbrack f\rbrack/n$ 에서 바로 끝난다.

$\mathbf I\lbrack f\rbrack\lt c'\mathrm{Var}\lbrack f\rbrack\log n$ 이면 $k=2\mathbf I\lbrack f\rbrack/\mathrm{Var}\lbrack f\rbrack$ 로 둔다. 준위가 $k$ 보다 큰 Fourier 무게는 $\mathbf I\lbrack f\rbrack/k=\mathrm{Var}\lbrack f\rbrack/2$ 이하이므로, 준위 $1$ 부터 $k$ 사이에 분산의 절반 이상이 있다.

좌표 $i$ 방향의 미분 $D_if=\sum_{S\ni i}\hat f(S)x\_{S\setminus\lbrace i\rbrace}$ 는 값이 $-1,0,1$ 이고 $0$ 이 아닐 확률이 $\mathrm{Inf}\_i\lbrack f\rbrack$ 이다. 초축약성 $\Vert T\_\rho g\Vert\_2\le\Vert g\Vert\_{1+\rho^2}$ 를 $\rho=1/\sqrt3$ 으로 $D_if$ 에 적용하고 $i$ 에 대해 더하면

$$
\sum_S\vert S\vert\thinspace 3^{1-\vert S\vert}\hat f(S)^2\le\sum_i\mathrm{Inf}\_i\lbrack f\rbrack^{3/2}\le\delta^{1/2}\thinspace\mathbf I\lbrack f\rbrack
$$

이다. 왼쪽은 준위 $1$ 부터 $k$ 사이의 무게에서 $3^{-k}\mathrm{Var}\lbrack f\rbrack/2$ 이상이다. 따라서 $\delta\ge 9^{-k}(\mathrm{Var}\lbrack f\rbrack/2\mathbf I\lbrack f\rbrack)^2$ 이다. $c'$ 을 작게 잡으면 $9^{-k}\ge n^{-1/2}$ 이므로 $\delta\ge n^{-1/2}(2c'\log n)^{-2}$ 이고, $n$ 이 크면 이 값이 $\log n/n$ 을 넘는다.

## Tribes 함수

$\log n/n$ 규모는 줄일 수 없다. 좌표 $n$ 개를 크기 $w$ 의 묶음으로 나누고, 어느 묶음의 좌표가 전부 $-1$ 이면 $-1$ 을, 아니면 $1$ 을 내는 함수를 Tribes 함수(tribes function)라 한다. $w\approx\log_2 n-\log_2\log_2 n$ 으로 잡으면 $\Pr\lbrack f=-1\rbrack$ 이 $1/2$ 에 가깝고 모든 좌표의 영향력이 $\Theta(\log n/n)$ 이다[^2].

## Friedgut 정리

Friedgut 정리(Friedgut's junta theorem)는 다음이다. $\mathbf I\lbrack f\rbrack\le K$ 이면 $f$ 는 좌표 $2^{O(K/\varepsilon)}$ 개에만 의존하는 함수와 확률 $\varepsilon$ 이하로만 다르다[^3]. 증명은 위와 같이 초축약성을 미분에 적용하고, 영향력이 작은 좌표를 버린 함수가 $f$ 에 가깝다는 것을 보인다.

# 활용

- 공동 동전 던지기. 여러 사람이 공정한 동전 하나를 정할 때 사람 $O(n/\log n)$ 명이 결탁하면 결과를 거의 확실하게 정할 수 있다. 영향력이 큰 좌표를 하나씩 고정하는 과정을 되풀이하면 이 결탁이 만들어진다.
- 문턱 현상. 단조 그래프 성질의 확률이 $p$ 에 따라 $0$ 에서 $1$ 로 바뀌는 구간의 폭이 $O(1/\log n)$ 이하다. 대칭성 때문에 모든 좌표의 영향력이 같으므로 편향 측도로 넓힌 이 정리가 총 영향력을 $\log n$ 배로 키우고, Margulis–Russo 공식으로 확률의 도함수가 총 영향력이므로 구간이 좁아진다. [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)의 문턱이 이 꼴이다[^4].
- [유일게임 추측과 2-to-2 정리](unique-games.md). 근사 불가능성 증명에서 영향력이 큰 좌표를 해독에 쓰는 단계가 이 정리와 Friedgut 정리를 쓴다.

[^1]: J. Kahn, G. Kalai, N. Linial, The influence of variables on Boolean functions, *Proc. 29th Annual Symposium on Foundations of Computer Science* (1988), 68–80.
[^2]: R. O'Donnell, *Analysis of Boolean Functions*, Cambridge University Press (2014), 4장(Tribes)과 9장(정리의 증명).
[^3]: E. Friedgut, Boolean functions with low average sensitivity depend on few coordinates, *Combinatorica* **18** (1998), 27–35.
[^4]: E. Friedgut, G. Kalai, Every monotone graph property has a sharp threshold, *Proc. Amer. Math. Soc.* **124** (1996), 2993–3002.

# 연관 문서

## 선수지식

- [부울 함수의 Fourier 해석](boolean-fourier.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #complexity #probability #analysis
