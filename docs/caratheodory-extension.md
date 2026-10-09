# Carathéodory 확장정리

# 개요

Carathéodory 확장정리는 다루기 쉬운 집합 몇 개에만 정한 크기를 $\sigma$ 대수 위의 측도로 넓히는 정리다. 덮개로 정의한 외측도를 먼저 모든 부분집합에 주고, 그 가운데 다른 집합을 값의 손실 없이 자르는 집합만 남긴다. 남은 집합들이 $\sigma$ 대수를 이루고 외측도가 그 위에서 측도가 된다. Lebesgue 측도, Hausdorff 측도, 곱측도가 이 하나의 절차로 나온다.

# 직관

구간의 길이는 정해져 있다. 임의의 집합 $E\subseteq\mathbb R$ 에 길이를 주려면 $E$ 를 셀 수 있는 구간들로 덮고 그 길이의 합을 본다. 덮는 방법이 여러 가지이니 가장 작은 값을 택한다.

$$
\mu^\ast(E)=\inf\Big\lbrace \sum\_{n=1}^\infty \lvert I\_n\rvert : E\subseteq\bigcup\_{n=1}^\infty I\_n\Big\rbrace
$$

이 값은 모든 부분집합에 있다. 측도가 되려면 겹치지 않는 두 집합 $A$ 와 $B$ 에서 $\mu^\ast(A\cup B)=\mu^\ast(A)+\mu^\ast(B)$ 여야 한다. 한쪽 부등호는 나온다. $A$ 의 덮개와 $B$ 의 덮개를 합치면 $A\cup B$ 의 덮개이므로 $\mu^\ast(A\cup B)\le\mu^\ast(A)+\mu^\ast(B)$ 다. 반대쪽을 얻으려면 $A\cup B$ 를 덮는 구간들에서 $A$ 의 덮개와 $B$ 의 덮개를 뽑아내야 한다. 덮개의 구간 하나가 $A$ 와 $B$ 에 걸쳐 있으면 그 길이를 두 쪽에 나눠 줄 방법이 없어 계산이 멈춘다.

걸쳐 있는 구간이 막았으니, 걸침 없이 자르는 집합만 남긴다. 집합 $A$ 가 임의의 집합 $S$ 를 잘랐을 때 $\mu^\ast(S\cap A)+\mu^\ast(S\setminus A)=\mu^\ast(S)$ 이면 $A$ 로 자르는 동안 값이 새지 않는다. 이 조건을 만족하는 $A$ 들만 모으면 그 위에서 가법성이 성립하고, 그런 $A$ 를 Carathéodory 가측집합이라 한다.

# 정의

$X$ 의 멱집합에서 $\lbrack 0,\infty\rbrack$ 로 가는 함수 $\mu^\ast$ 가 다음 셋을 만족하면 **외측도**다.

- $\mu^\ast(\varnothing)=0$
- $A\subseteq B$ 이면 $\mu^\ast(A)\le\mu^\ast(B)$
- $\mu^\ast\big(\bigcup\_{n=1}^\infty A\_n\big)\le\sum\_{n=1}^\infty\mu^\ast(A\_n)$

셋째 조건이 가산 열가법성이다. 등호가 아닌 부등호여서 모든 부분집합에 값을 줄 수 있다.

집합 $A\subseteq X$ 가 모든 $S\subseteq X$ 에 대해 다음을 만족하면 $\mu^\ast$ 에 대해 **Carathéodory 가측**이다.

$$
\mu^\ast(S)=\mu^\ast(S\cap A)+\mu^\ast(S\setminus A)
$$

열가법성에서 $\le$ 는 늘 성립하므로 확인할 것은 $\ge$ 뿐이다. 가측집합 전체를 $\mathcal M(\mu^\ast)$ 로 쓴다.

## 전측도

$X$ 의 부분집합들의 모임 $\mathcal A$ 가 $\varnothing$ 을 담고 유한 합집합과 차집합에 닫혀 있으면 **대수**다. 대수 $\mathcal A$ 위의 함수 $\mu\_0:\mathcal A\to\lbrack 0,\infty\rbrack$ 가 $\mu\_0(\varnothing)=0$ 이고, 서로소인 $A\_1,A\_2,\dots\in\mathcal A$ 의 합집합이 다시 $\mathcal A$ 에 들면 $\mu\_0(\bigcup A\_n)=\sum\mu\_0(A\_n)$ 일 때 **전측도**다.

전측도는 $\mathcal A$ 의 덮개로 외측도를 유도한다.

$$
\mu^\ast(E)=\inf\Big\lbrace \sum\_{n=1}^\infty\mu\_0(A\_n) : E\subseteq\bigcup\_{n=1}^\infty A\_n,\thinspace A\_n\in\mathcal A\Big\rbrace
$$

# 성질

## Carathéodory 정리

**정리.** 외측도 $\mu^\ast$ 에 대해 $\mathcal M(\mu^\ast)$ 는 $\sigma$ 대수이고, $\mu^\ast$ 를 $\mathcal M(\mu^\ast)$ 로 제한한 것은 완비 측도다.[^1]

증명의 요지. 정의가 $A$ 와 $X\setminus A$ 에 대칭이므로 여집합에 닫힌다. 유한 합집합은 조건을 두 번 적용해 얻는다. $A,B$ 가 가측이면 시험집합 $S$ 를 $A$ 로 자르고 각 조각을 다시 $B$ 로 잘라 네 조각으로 만든 뒤 열가법성으로 모으면 $A\cup B$ 가 조건을 만족한다.

가산 합집합에는 서로소 열 $A\_1,A\_2,\dots$ 를 쓴다. 유한 단계에서 $\mu^\ast(S)\ge\sum\_{n=1}^N\mu^\ast(S\cap A\_n)+\mu^\ast(S\setminus\bigcup\_{n=1}^N A\_n)$ 이고, 마지막 항은 단조성으로 $\mu^\ast(S\setminus\bigcup\_{n=1}^\infty A\_n)$ 보다 크다. $N\to\infty$ 를 보내고 다시 열가법성을 쓰면 $\bigcup A\_n$ 이 가측이다. 같은 부등식에 $S=\bigcup A\_n$ 을 넣으면 가산 가법성이 나온다.

완비성은 정의에서 바로 나온다. $\mu^\ast(A)=0$ 이면 단조성으로 $\mu^\ast(S\cap A)=0$ 이고 $\mu^\ast(S\setminus A)\le\mu^\ast(S)$ 이므로 $A$ 가 가측이다. 즉 외측도가 $0$ 인 집합은 모두 $\mathcal M(\mu^\ast)$ 에 든다.

## 전측도의 확장

**정리(Hahn–Kolmogorov).** 대수 $\mathcal A$ 위의 전측도 $\mu\_0$ 가 유도한 외측도 $\mu^\ast$ 에 대해 $\mathcal A\subseteq\mathcal M(\mu^\ast)$ 이고 $\mu^\ast$ 는 $\mathcal A$ 에서 $\mu\_0$ 와 일치한다. 따라서 $\mu\_0$ 는 $\sigma(\mathcal A)$ 위의 측도로 확장된다.[^1]

증명의 요지. $A\in\mathcal A$ 를 덮개 하나로 쓰면 $\mu^\ast(A)\le\mu\_0(A)$ 다. 반대 방향은 $A$ 를 덮는 $\lbrace A\_n\rbrace$ 에 대해 $A\cap A\_n$ 을 서로소화하고 $\mathcal A$ 위의 가산 가법성을 써서 $\mu\_0(A)\le\sum\mu\_0(A\_n)$ 을 얻는다. 가측성도 덮개를 $A$ 의 안과 밖으로 쪼개어 확인한다.

## 유일성

**정리.** $\mu\_0$ 가 $\sigma$ 유한이면 $\sigma(\mathcal A)$ 위의 확장은 유일하다.

증명의 요지. 두 확장이 일치하는 집합들의 모임은 $\lambda$ 계이고 $\mathcal A$ 를 담는다. $\mathcal A$ 가 $\pi$ 계이므로 Dynkin 의 $\pi\text{-}\lambda$ 정리로 그 모임이 $\sigma(\mathcal A)$ 를 담는다. $\sigma$ 유한성은 전체 공간을 유한 측도 조각으로 끊어 각 조각에서 이 논법을 쓰는 데 필요하다.

$\sigma$ 유한성이 없으면 유일성이 깨진다. $\mathbb R$ 의 유한 구간들의 대수 위에서 공집합이 아닌 구간마다 $\infty$ 를 주는 전측도는 Borel 집합 위에서 셈측도의 $c$ 배로 여러 가지로 확장된다.

## 완비화와 Borel 집합

$\mathcal M(\mu^\ast)$ 는 $\sigma(\mathcal A)$ 보다 크다. 확장이 $\sigma$ 유한이면 $\mathcal M(\mu^\ast)$ 는 $\sigma(\mathcal A)$ 의 완비화와 같고, $E\in\mathcal M(\mu^\ast)$ 는 $B\in\sigma(\mathcal A)$ 와 $\mu^\ast$ 영집합 $N$ 으로 $E=B\triangle N$ 꼴로 적힌다. Lebesgue 가측집합이 Borel 집합보다 많은 것이 이 차이다.

# 활용

## Lebesgue 측도

$\mathbb R$ 의 유한 구간들의 유한 합집합이 대수이고 구간의 길이가 그 위의 전측도다. 이 전측도에 정리를 적용하면 Lebesgue 가측집합의 $\sigma$ 대수와 Lebesgue 측도가 나온다. [측도](measure.md)의 구성 절이 줄여 적은 절차가 이것이다. 구간의 길이에서 출발하므로 평행이동 불변성이 외측도로 전해지고, [Vitali 집합](vitali-set.md)이 $\mathcal M(\mu^\ast)$ 밖에 있다.

## 분포함수와 Stieltjes 측도

오른쪽 연속인 증가함수 $F$ 에 대해 $\mu\_0((a,b\rbrack)=F(b)-F(a)$ 는 반열린 구간들의 대수 위의 전측도다. 확장이 Lebesgue–Stieltjes 측도이고, $F$ 가 분포함수이면 그 확률분포다. 분포함수만으로 [확률변수](random-variables.md)의 분포가 정해지는 근거가 이 확장과 유일성이다.

## 곱측도

가측 직사각형의 유한 합집합 위에 $\mu(A)\nu(B)$ 의 합으로 정의한 집합함수가 전측도이고, 그 확장이 [곱측도](product-measure.md)다. $\sigma$ 유한일 때 단면의 적분으로 정의한 곱측도와 일치하는 것이 유일성의 결과다.

## Hausdorff 측도

지름이 $\delta$ 이하인 덮개로 $\sum(\mathrm{diam}\thinspace U\_i)^s$ 의 하한을 잡고 $\delta\to 0$ 을 보내면 $s$ 차원 Hausdorff 외측도다. 전측도에서 출발하지 않고 외측도를 직접 정의한 경우이며, Carathéodory 정리만으로 측도를 얻는다. Borel 집합이 가측인 것은 외측도가 떨어진 두 집합에서 가법적이라는 추가 성질에서 나온다.

## 측도의 존재를 다른 길로 얻는 구성

[Loeb 측도](loeb-measure.md)는 내부 대상 위의 유한가법측도에서 포화성으로 $\sigma$ 가법성을 끌어내고, 그 뒤에 이 정리로 완비 측도를 만든다. [단조 수렴 정리](monotone-convergence.md)의 활용 절이 드는 단조 근사 구성도 여기에 든다.

[^1]: Gerald B. Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed., 1.4절 (외측도, Carathéodory 정리, 전측도의 확장과 유일성).

# 연관 문서

## 선수지식

- [측도](measure.md)

## 더 알아보기

- [Hausdorff 차원](hausdorff-dimension.md)

#measure_theory #analysis #probability
