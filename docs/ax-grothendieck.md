# Ax–Grothendieck 정리

# 개요

복소 아핀 공간 $\mathbb C^n$ 에서 자기 자신으로 가는 다항식 사상이 단사이면 전사다. 정의역과 공역이 같은 무한집합이므로 유한집합의 비둘기집 논증이 직접 쓰이지 않는다.

증명은 체를 갈아탄다. 유한체에서는 정의역이 유한하므로 단사가 곧 전사이고, 이 사실이 대수적 폐포를 거쳐 특성 $p$ 인 대수적 닫힌 체로 올라간다. 마지막으로 [모형론](model-theory.md)의 이전 원리가 특성 $0$ 으로 옮긴다.

# 직관

$f:\mathbb C\to\mathbb C$ 가 $f(z)=z^2$ 이면 단사가 아니고, $f(z)=z^3-z$ 도 단사가 아니다. 단사인 다항식 하나를 실제로 찾으면 $az+b$ 꼴뿐이고 이들은 전사다. 차수가 $2$ 이상이면 단사성이 이미 깨진다는 사정이 한 변수에서는 대수학의 기본 정리로 설명된다.

변수가 여럿이면 이 설명이 통하지 않는다. $(x,y)\mapsto(x,y+x^2)$ 은 단사이고 전사이며, 단사이면서 전사가 아닌 예를 찾으려는 시도가 모두 실패한다. 실패의 이유를 $\mathbb C$ 안에서 찾는 대신 체를 바꾼다.

[유한체](finite-fields.md) $\mathbb F_q$ 위에서는 $\mathbb F_q^n$ 이 유한집합이고 다항식 사상은 그 집합에서 자기 자신으로 가는 함수다. 유한집합에서 단사이면 전사다. 이 관찰이 증명의 전부이고 나머지는 이 결론을 $\mathbb C$ 로 옮기는 작업이다.

# 정의

체 $k$ 위의 **다항식 사상** $f:k^n\to k^n$ 은 성분이 $k\lbrack x_1,\dots,x_n\rbrack$ 의 원소인 사상

$$
f(x_1,\dots,x_n)=\bigl(f_1(x_1,\dots,x_n),\dots,f_n(x_1,\dots,x_n)\bigr)
$$

이다. 각 $f_i$ 의 차수가 $d$ 이하인 사상 전체를 생각한다.

$\mathrm{ACF}\_p$ 는 특성 $p$ 인 대수적 닫힌 체의 1차 이론이다. $p$ 는 $0$ 또는 소수다.

# 성질

## Ax–Grothendieck 정리

**정리(Ax, Grothendieck).** $k$ 가 대수적 닫힌 체이고 $f:k^n\to k^n$ 이 다항식 사상일 때, $f$ 가 단사이면 전사다.[^1]

특히 $k=\mathbb C$ 에서 성립한다.

## 1차 문장 번역

고정된 $n$ 과 $d$ 에 대해 "차수 $d$ 이하의 다항식 사상이 단사이면 전사다" 는 체의 언어로 쓴 문장 $\sigma_{n,d}$ 가 된다. 계수를 양화사로 묶고, 단사성과 전사성을 각각 양화사로 쓰면 된다.

$$
\sigma_{n,d}:\ \forall\thinspace\bar a\thinspace\bigl(\text{단사}(f_{\bar a})\to\text{전사}(f_{\bar a})\bigr)
$$

계수의 개수가 $n$ 과 $d$ 로 정해지므로 양화사가 유한 개다. 차수 제한을 풀면 1차 문장이 아니므로, 정리를 문장들의 모임 $\lbrace\sigma_{n,d}\rbrace$ 로 쪼개는 것이 증명의 첫 단계다.

## 특성 $p$ 에서의 증명

$k$ 가 특성 $p$ 인 대수적 닫힌 체이면 $k$ 는 $\overline{\mathbb F_p}$ 를 포함하고, 다항식 사상 $f$ 의 계수는 유한 개다.

$f$ 가 단사라 하고 $y\in k^n$ 을 잡는다. $y$ 의 좌표와 $f$ 의 계수를 모두 담는 유한체 $\mathbb F_q\subseteq\overline{\mathbb F_p}$ 가 있고, $f$ 는 $\mathbb F_q^n$ 을 자기 자신으로 보낸다. 유한집합 위의 단사 함수는 전사이므로 $f(x)=y$ 인 $x\in\mathbb F_q^n$ 이 있다. $y$ 가 임의이므로 $f$ 가 전사다. ∎

## 특성 $0$ 이전

**보조정리.** $\sigma$ 가 체의 언어의 문장이고 충분히 큰 모든 소수 $p$ 에 대해 $\mathrm{ACF}\_p\models\sigma$ 이면 $\mathrm{ACF}\_0\models\sigma$ 다.

$\mathrm{ACF}\_0\not\models\sigma$ 라 하면 $\mathrm{ACF}\_0\cup\lbrace\neg\sigma\rbrace$ 가 모형을 갖는다. 특성 $0$ 은 $1+\dots+1\ne0$ 이라는 문장 무한 개로 쓰이므로, 콤팩트성 정리를 쓰면 유한 부분집합만 만족하는 모형이 있고 그것은 충분히 큰 어떤 특성 $p$ 의 대수적 닫힌 체다. 그 체가 $\neg\sigma$ 를 만족해 가정에 어긋난다. ∎

각 $\sigma_{n,d}$ 가 모든 특성 $p$ 에서 성립하므로 보조정리가 특성 $0$ 에서의 결론을 준다. $\mathrm{ACF}\_0$ 이 완전 이론이므로 $\mathbb C$ 에서도 같다.

[초곱](ultraproducts.md)을 쓰면 같은 논증을 한 줄로 줄인다. 특성 $p$ 인 대수적 닫힌 체들을 비주 초필터로 초곱하면 특성 $0$ 인 대수적 닫힌 체가 되고, Łoś 정리가 문장의 이전을 준다.

## 역방향의 실패

전사이면서 단사가 아닌 다항식 사상이 있다. $n=1$ 에서 $f(z)=z^2$ 이 $\mathbb C$ 위에서 전사이고 단사가 아니다. 정리의 함의는 한 방향뿐이다.

# 활용

- **대수기하의 증명 이전.** 특성 $p$ 에서 확인한 1차 성질을 특성 $0$ 으로 옮기는 논법의 표준 예다. 유한체의 점 세기를 쓸 수 있는 진술이면 같은 전략이 통한다.
- **Jacobi 추측과의 대비.** Jacobi 추측은 특성 $0$ 에서 Jacobi 행렬식이 $0$ 아닌 상수인 다항식 사상이 다항식 역을 갖는다고 말한다. Ax–Grothendieck 은 단사에서 전사를 주지만 역사상이 [다항식](polynomial-rings.md)인지는 말하지 않는다.
- **양화사 소거의 응용.** 대수적 닫힌 체의 이론이 양화사 소거를 가지므로 구성 가능 집합의 상이 구성 가능하다는 Chevalley 정리가 같은 자리에서 나온다.

[^1]: James Ax, *The elementary theory of finite fields*, Ann. of Math. 88 (1968), 239–271. Grothendieck 은 EGA IV, 10.4.11 에서 스킴의 언어로 같은 결과를 얻었다.

# 연관 문서

## 선수지식

- [모형론](model-theory.md)
- [유한체](finite-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#logic #algebra #field_theory #foundations
