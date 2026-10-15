# 균일 볼록 공간

# 개요

균일 볼록 공간은 단위구 위의 두 점이 서로 떨어져 있으면 그 중점이 구의 안쪽으로 일정한 만큼 들어가는 Banach 공간이다. 떨어진 거리마다 들어가는 깊이의 하한이 정해져 있다는 점이 균일이라는 말의 내용이다.

Milman–Pettis 정리로 균일 볼록 공간은 [반사적](reflexive-spaces.md)이다. 닫힌 볼록집합의 최근접점이 유일하게 존재하는 것도 이 조건에서 나온다.

# 직관

$\mathbb R^2$ 에 최대 노름 $\Vert(x,y)\Vert=\max(\vert x\vert,\vert y\vert)$ 를 주고, 직선 $C=\lbrace(x,1):x\in\mathbb R\rbrace$ 에서 원점에 가장 가까운 점을 찾는다. $\Vert(x,1)\Vert=\max(\vert x\vert,1)$ 이므로 $\vert x\vert\le1$ 인 모든 점에서 거리가 $1$ 이고, 최근접점이 선분 하나를 가득 채운다. 가장 가까운 점을 하나로 정할 수 없다.

[Hilbert 공간](hilbert-spaces.md)에서 같은 문제를 풀면 최근접점이 하나다. 닫힌 볼록집합 $C$ 와 거리 $d=\inf\_{u\in C}\Vert u\Vert$ 에 대해 $\Vert u\Vert=\Vert v\Vert=d$ 인 두 점을 잡으면, 평행사변형 법칙이 $\Vert(u+v)/2\Vert^2=\frac12\Vert u\Vert^2+\frac12\Vert v\Vert^2-\frac14\Vert u-v\Vert^2$ 를 준다. 중점은 $C$ 에 있으므로 노름이 $d$ 이상인데, 오른쪽은 $u\ne v$ 이면 $d^2$ 보다 작다. 그래서 $u=v$ 다.

최댓값 노름에서 깨진 것은 중점의 노름이 두 점의 노름보다 작아지지 않는다는 데 있다. $(1,1)$ 과 $(-1,1)$ 은 노름이 둘 다 $1$ 이고 거리가 $2$ 인데 중점 $(0,1)$ 의 노름도 $1$ 이다. 두 점이 떨어진 만큼 중점이 안으로 들어가는 것을 조건으로 세우면 Hilbert 공간의 논증이 그대로 돌아간다.

# 정의

## 균일 볼록

Banach 공간 $X$ 가 **균일 볼록**이라는 것은 모든 $\varepsilon\in(0,2\rbrack$ 에 대해 $\delta\gt 0$ 이 있어 다음이 성립하는 것이다.

$$
\Vert x\Vert\le1,\thinspace\Vert y\Vert\le1,\thinspace\Vert x-y\Vert\ge\varepsilon\thinspace\Longrightarrow\thinspace\left\Vert\frac{x+y}2\right\Vert\le1-\delta
$$

## 볼록성 계수

$\varepsilon$ 마다 가능한 $\delta$ 의 상한을 **볼록성 계수**라 한다.

$$
\delta\_X(\varepsilon)=\inf\lbrace 1-\Vert(x+y)/2\Vert:\Vert x\Vert\le1,\thinspace\Vert y\Vert\le1,\thinspace\Vert x-y\Vert\ge\varepsilon\rbrace
$$

$X$ 가 균일 볼록인 것은 $\varepsilon\gt 0$ 마다 $\delta\_X(\varepsilon)\gt 0$ 인 것이다.

## 엄격 볼록

$\Vert x\Vert=\Vert y\Vert=1$ 이고 $x\ne y$ 이면 $\Vert(x+y)/2\Vert\lt 1$ 인 공간을 **엄격 볼록**이라 한다. 균일 볼록이면 엄격 볼록이고, 역은 거짓이다.

# 성질

## Clarkson 부등식

$1\lt p\lt\infty$ 에서 [$L^p$ 공간](lp-spaces.md)은 균일 볼록이다. $2\le p\lt\infty$ 에서는 다음 부등식이 그 근거다.[^1]

$$
\left\Vert\frac{f+g}2\right\Vert\_p^p+\left\Vert\frac{f-g}2\right\Vert\_p^p\le\frac12\Vert f\Vert\_p^p+\frac12\Vert g\Vert\_p^p
$$

$\Vert f\Vert\_p,\Vert g\Vert\_p\le1$ 과 $\Vert f-g\Vert\_p\ge\varepsilon$ 을 넣으면 $\Vert(f+g)/2\Vert\_p\le(1-(\varepsilon/2)^p)^{1/p}$ 가 나온다. $1\lt p\lt2$ 에서는 지수를 $q=p/(p-1)$ 로 바꾼 부등식을 쓴다. $p=1$ 과 $p=\infty$ 에서는 균일 볼록이 성립하지 않는다.

## Milman–Pettis 정리

균일 볼록 Banach 공간은 반사적이다.[^2]

증명의 요지. $J$ 를 표준 매장, $\varphi\in X^{\ast\ast}$ 를 $\Vert\varphi\Vert=1$ 인 원소로 잡는다. [Banach–Alaoglu 정리](banach-alaoglu.md)로 $J$ 가 보낸 단위구는 $X^{\ast\ast}$ 의 단위구에서 약 $\ast$ 조밀하다. $\varphi$ 의 약 $\ast$ 근방에 든 $J(x)$ 두 개를 잡으면 균일 볼록성이 $\Vert x-y\Vert$ 를 작게 묶으므로, 근방을 좁혀 가며 얻은 점들이 Cauchy 열을 이루고 그 극한 $x\_0$ 이 $J(x\_0)=\varphi$ 를 만족한다.

## 최근접점의 유일성

$X$ 가 균일 볼록이고 $C\subseteq X$ 가 닫힌 볼록집합이면 $X$ 의 각 점에서 $C$ 에 가장 가까운 점이 하나뿐이다. 거리를 $d$ 라 하고 노름이 $d$ 에 가까운 두 점을 잡으면 중점이 $C$ 에 있어 노름이 $d$ 이상인데, 균일 볼록성은 두 점이 떨어져 있을 때 중점의 노름을 $d$ 보다 작게 만든다. 존재는 반사성에서 나온다.

## 균일 볼록이 아닌 공간

$C\lbrack 0,1\rbrack$ 과 $\ell^\infty$ 와 $L^1\lbrack 0,1\rbrack$ 은 균일 볼록이 아니다. 앞의 둘은 노름이 $1$ 인 두 함수의 중점의 노름이 그대로 $1$ 인 쌍을 갖고, $L^1$ 은 서로 겹치지 않는 구간에 지지를 둔 두 함수가 그 쌍이 된다.

# 활용

- 반사성 판정에 쓴다. $1\lt p\lt\infty$ 의 $L^p$ 와 [Sobolev 공간](sobolev-spaces.md) $W^{k,p}$ 의 반사성을 Clarkson 부등식과 Milman–Pettis 정리로 얻는다.
- [변분법의 직접법](direct-method.md)에서 최소화열의 수렴을 노름까지 올릴 때 쓴다. 약수렴하는 열의 노름이 극한의 노름으로 수렴하면 균일 볼록성이 강수렴을 준다.
- $L^p$ 근사에서 최적 근사원소가 유일하다는 결론이 최근접점의 유일성이다. $p=1$ 과 $p=\infty$ 에서 최적 근사가 여럿일 수 있는 것이 직관 절의 계산과 같은 이유다.

[^1]: J. A. Clarkson, "Uniformly convex spaces", *Transactions of the American Mathematical Society* 40 (1936), 396–414.

[^2]: D. P. Milman, "On some criteria for the regularity of spaces of the type (B)", *Doklady Akademii Nauk SSSR* 20 (1938), 243–246. B. J. Pettis, "A proof that every uniformly convex space is reflexive", *Duke Mathematical Journal* 5 (1939), 249–253.

# 연관 문서

## 선수지식

- [반사 공간](reflexive-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #optimization #measure_theory
