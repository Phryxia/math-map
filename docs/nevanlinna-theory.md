# Nevanlinna 이론

# 개요

**Nevanlinna 이론(Nevanlinna theory)** 은 복소평면 전체에서 정의된 유리형함수가 각 값을 얼마나 자주 취하는지 재는 이론이다. $e^z$ 는 값 $0$ 을 한 번도 취하지 않지만, 값 $1$ 은 점 $2\pi ik$ 마다 취해서 반지름 $r$ 인 원판 안에 대략 $r/\pi$ 번 취한다. 값 $0$ 을 취하지 않는 대신 $e^z$ 에 무엇이 일어나는지, 몇 개의 값이 이렇게 빠질 수 있는지가 물음이다.

이 이론은 [Jensen 공식](jensen-formula.md)을 $f-a$ 에 적용해, 값 $a$ 를 취한 횟수와 $f$ 가 $a$ 에 가까이 머문 정도의 합이 $a$ 에 관계없이 같음을 보인다. 그 합을 기준으로 두면 빠지는 값이 둘을 넘을 수 없다.

# 직관

$f(z)=e^z$ 가 값 $a\neq 0$ 을 취하는 점은 $\log a+2\pi ik$ 들이다. 반지름 $r$ 인 원판에는 이런 점이 대략 $r/\pi$ 개 있고, $a$ 를 바꿔도 개수의 주항은 같다. 값 $0$ 만 원판 안에서 $0$ 번 취해진다.

Jensen 공식은 원 $\vert z\vert=r$ 위에서 $\log\vert e^z-a\vert$ 의 평균으로 원판 안 해의 개수를 센다. 원 위의 오른쪽 절반에서는 $\vert e^z\vert=e^{r\cos\theta}$ 가 커서 $\log\vert e^z-a\vert$ 가 $r\cos\theta$ 에 가깝다. 왼쪽 절반에서는 $e^z$ 가 $0$ 에 가까워 $\log\vert e^z-a\vert$ 가 $\log\vert a\vert$ 에 가깝다. 평균은 대략 $r\cos\theta$ 를 오른쪽 절반에서 평균 낸 값, 곧 $r/\pi$ 이다.

$a=0$ 이면 $\log\vert e^z\vert=r\cos\theta$ 의 평균이 $0$ 이어서 해가 없다는 것과 맞는다. 대신 왼쪽 절반에서 $e^z$ 가 $0$ 에 매우 가깝다. $\log(1/\vert e^z\vert)=-r\cos\theta$ 를 왼쪽 절반에서 평균 내면 다시 $r/\pi$ 다.

모든 $a$ 에서 "해의 개수로 잰 양" 과 "$a$ 에 가까이 머문 양" 을 더하면 $r/\pi$ 다. $a\neq 0$ 이면 전부 해의 개수이고 $a=0$ 이면 전부 가까이 머문 양이다. 이 합이 $a$ 에 관계없이 같다는 것이 Nevanlinna 의 제1 기본정리다.

# 정의

$f$ 가 $\mathbb C$ 에서 유리형이고 $a\in\mathbb C\cup\lbrace\infty\rbrace$ 일 때, $n(r,a)$ 는 $\vert z\vert\le r$ 안에서 $f(z)=a$ 인 점을 중복도까지 세어 더한 값이다. $a=\infty$ 이면 극을 센다. $e^z$ 는 $n(r,0)=n(r,\infty)=0$ 이다.

$\log^+x=\max(0,\log x)$ 로 쓴다. 다음 세 값을 정의한다. 단순하게 쓰려고 $f(0)\neq a$ 인 경우만 적는다.

$$
\begin{aligned}
N(r,a)&=\int_0^r\frac{n(t,a)}{t}\thinspace dt \cr
m(r,a)&=\frac{1}{2\pi}\int_0^{2\pi}\log^+\frac{1}{\vert f(re^{i\theta})-a\vert}\thinspace d\theta \cr
m(r,\infty)&=\frac{1}{2\pi}\int_0^{2\pi}\log^+\vert f(re^{i\theta})\vert\thinspace d\theta
\end{aligned}
$$

$N(r,a)$ 는 **계수 함수(counting function)** 이고 $f$ 가 $a$ 를 취한 횟수를 잰다. $m(r,a)$ 는 **근접 함수(proximity function)** 이고 원 위에서 $f$ 가 $a$ 에 가까이 머문 정도를 잰다.

**Nevanlinna 특성함수(Nevanlinna characteristic)** 는 다음이다.

$$
T(r,f)=m(r,\infty)+N(r,\infty)
$$

$e^z$ 는 극이 없으므로 $T(r,e^z)=m(r,\infty)$ 이고, $\log^+e^{r\cos\theta}$ 는 오른쪽 절반에서만 $r\cos\theta$ 이므로 $T(r,e^z)=r/\pi$ 다. 다항식 $f$ 의 차수가 $d$ 이면 $T(r,f)=d\log r+O(1)$ 이다.

값 $a$ 의 **결손(deficiency)** 은 다음 값이다.

$$
\delta(a)=\liminf_{r\to\infty}\frac{m(r,a)}{T(r,f)}
$$

$e^z$ 는 $\delta(0)=\delta(\infty)=1$ 이고 다른 값에서 $\delta(a)=0$ 이다.

# 성질

## 제1 기본정리

*정리.* 모든 $a$ 에 대해 $r\to\infty$ 에서 다음이 성립한다[^1].

$$
m(r,a)+N(r,a)=T(r,f)+O(1)
$$

*증명의 요지.* [Jensen 공식](jensen-formula.md)의 유리형함수 꼴을 $f-a$ 에 적용하면 원 위 $\log\vert f-a\vert$ 의 평균이 $N(r,a)$ 와 극의 계수 함수 $N(r,\infty)$ 의 차에 상수를 더한 값이 된다. $\log x=\log^+x-\log^+(1/x)$ 로 평균을 나누면 $m(r,\infty)$ 쪽과 $m(r,a)$ 쪽이 갈린다. $\log^+\vert f-a\vert$ 와 $\log^+\vert f\vert$ 의 차는 $\log^+\vert a\vert+\log 2$ 이하이므로 오차는 유계다. ∎

$m\ge 0$ 이므로 $N(r,a)\le T(r,f)+O(1)$ 이다. 어떤 값도 $T(r,f)$ 보다 눈에 띄게 많이 취해지지 않는다. 결손은 $0\le\delta(a)\le 1$ 이고, $f$ 가 $a$ 를 한 번도 취하지 않으면 $N(r,a)=0$ 이어서 $\delta(a)=1$ 이다.

## 제2 기본정리

*정리.* $a\_1,\dots,a\_q$ 가 $\mathbb C\cup\lbrace\infty\rbrace$ 의 서로 다른 점이고 $f$ 가 상수가 아니면 다음이 성립한다. 오차항은 $r$ 이 유한 측도의 예외 집합 밖에서 무한대로 갈 때 $o(T(r,f))$ 다[^2].

$$
(q-2)\thinspace T(r,f)\le\sum_{j=1}^{q}N(r,a\_j)+o(T(r,f))
$$

$e^z$ 에서 $a\_1=0$, $a\_2=\infty$, $a\_3=1$ 로 두면 좌변은 $r/\pi$ 이고 우변은 $0+0+r/\pi$ 에 오차를 더한 값이다. 등호에 가깝다.

## 결손 관계

제1 기본정리로 $N(r,a\_j)=T(r,f)-m(r,a\_j)+O(1)$ 을 제2 기본정리에 넣으면 $\sum\_jm(r,a\_j)\le 2T(r,f)+o(T(r,f))$ 를 얻는다. $T$ 로 나누고 극한을 잡으면 다음이 나온다.

$$
\sum_{a\in\mathbb C\cup\lbrace\infty\rbrace}\delta(a)\le 2
$$

결손이 양수인 값은 많아야 셀 수 있는 개수다. $e^z$ 는 $\delta(0)+\delta(\infty)=2$ 로 등호를 이룬다.

## Picard 정리의 정량화

$f$ 가 유리형이고 세 값 $a\_1,a\_2,a\_3$ 을 취하지 않으면 각 결손이 $1$ 이어서 합이 $3$ 이므로 결손 관계에 어긋난다. 그러므로 상수가 아닌 유리형함수가 빠뜨리는 값은 많아야 둘이다. 정칙함수는 $\infty$ 를 빠뜨리므로 빠뜨리는 유한한 값은 많아야 하나다. 이것이 작은 [Picard 정리](picard-theorems.md)다.

# 활용

- 유리형함수의 증가를 비교한다. $T(r,f)$ 가 $O(\log r)$ 이면 $f$ 는 유리함수이고, $T(r,f')\le 2T(r,f)+o(T(r,f))$ 같은 부등식으로 미분방정식의 유리형 해가 얼마나 빨리 커지는지 묶는다.
- 두 유리형함수가 다섯 개의 값에서 해의 집합이 같으면 두 함수가 같다는 Nevanlinna 의 다섯 값 정리(five value theorem)가 제2 기본정리에서 나온다.
- Vojta 대응(Vojta's dictionary)은 유리형함수를 대수적 수의 근사 문제에 대응시킨다. 근접 함수가 근사의 질에, 특성함수가 높이에 대응하고, 제2 기본정리는 [Roth 정리](roth-theorem.md)에 대응한다.

[^1]: W. K. Hayman, *Meromorphic Functions*, Oxford Univ. Press, 1964, 1 장 — 특성함수와 제1 기본정리.
[^2]: W. K. Hayman, *Meromorphic Functions*, Oxford Univ. Press, 1964, 2 장 — 제2 기본정리와 결손 관계.

# 연관 문서

## 선수지식

- [Jensen 공식](jensen-formula.md)
- [Picard 정리](picard-theorems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #number_theory
