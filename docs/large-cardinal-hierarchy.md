# 큰 기수의 층

# 개요

큰 기수의 층은 도달 불가능 기수 위에 놓이는 [큰 기수](large-cardinals.md) 공리들의 줄이다. Mahlo 기수와 약콤팩트 기수는 $\kappa$ 아래에 같은 종류의 기수가 많다는 반사 조건으로, 강기수와 초콤팩트 기수와 Woodin 기수는 $\kappa$ 를 임계점으로 하는 기본 매장 $j\colon V\to M$ 에서 $M$ 이 $V$ 를 얼마나 담는지로 정의한다.

아래 층의 존재는 위 층의 정의에서 따라 나오고, 거꾸로는 따라 나오지 않는다. 이 줄이 집합론에서 명제의 무모순성 강도를 재는 눈금이다.

# 직관

도달 불가능 기수가 하나 있다고 가정하고 이 가정의 세기를 재 본다. 가장 작은 도달 불가능 기수를 $\kappa$ 라 하면 $V_\kappa$ 는 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)의 모형이고, $\kappa$ 가 가장 작으므로 그 안에는 도달 불가능 기수가 없다. 그러므로 도달 불가능 기수가 하나 있다는 가정에서 둘 있다는 결론은 나오지 않는다. 둘 있다는 가정이 하나 있다는 가정보다 세다.

세기를 더 올리는 요구는 두 가지다. 하나는 $\kappa$ 아래에 도달 불가능 기수가 많다고 요구하는 것이고, 많다는 것을 정상집합으로 재면 Mahlo 기수가 나온다. 다른 하나는 $\kappa$ 를 임계점으로 하는 기본 매장 $j\colon V\to M$ 이 있다고 요구하고 $M$ 이 $V$ 를 얼마나 담는지로 재는 것이다. 측도 가능 기수는 그런 매장이 있다는 것만 요구하고, 강기수는 모든 $V_\gamma$ 가 $M$ 에 들어 있기를, 초콤팩트 기수는 크기가 큰 부분집합까지 $M$ 에 들어 있기를 요구한다.

# 정의

## 닫힌 비유계 집합과 정상집합

정칙 비가산 기수 $\kappa$ 와 $C\subseteq\kappa$ 를 둔다. $\kappa$ 미만의 극한 서수 $\alpha$ 에 대해 $C\cap\alpha$ 가 $\alpha$ 에 공종이면 항상 $\alpha\in C$ 일 때 $C$ 가 **닫혀 있다**고 한다. $C$ 가 $\kappa$ 에 공종이면 **비유계**다. 닫히고 비유계인 집합 전체와 만나는 $S\subseteq\kappa$ 를 **정상집합**이라 한다.

## Mahlo 기수

도달 불가능 기수 $\kappa$ 에 대해, $\kappa$ 미만의 도달 불가능 기수 전체가 $\kappa$ 에서 정상집합이면 $\kappa$ 를 **Mahlo 기수**라 한다.

## 약콤팩트 기수와 Ramsey 기수

$\kappa\to(\kappa)^n\_2$ 는 $\kappa$ 의 $n$ 원소 부분집합을 두 색으로 칠할 때 크기 $\kappa$ 의 동색 부분집합이 있다는 명제다. 동색이란 그 부분집합의 $n$ 원소 부분집합이 모두 같은 색이라는 뜻이다. 비가산 기수 $\kappa$ 가 $\kappa\to(\kappa)^2\_2$ 를 만족하면 **약콤팩트 기수**라 한다.

$\kappa\to(\kappa)^{\lt \omega}\_2$ 는 크기마다 따로 주어진 칠하기에 대해 모든 크기에서 동색인 크기 $\kappa$ 의 부분집합이 있다는 명제다. 비가산 기수 $\kappa$ 가 이를 만족하면 **Ramsey 기수**라 한다.

## 강기수

서수 $\gamma$ 에 대해, 기본 매장 $j\colon V\to M$ 이 있어 $\mathrm{crit}(j)=\kappa$ 이고 $V_\gamma\subseteq M$ 이면 $\kappa$ 가 $\gamma$-**강**이라 한다. 모든 서수 $\gamma$ 에서 $\gamma$-강인 기수를 **강기수**라 한다.

## 초콤팩트 기수

모든 $\lambda\ge\kappa$ 에 대해 기본 매장 $j\colon V\to M$ 이 있어 $\mathrm{crit}(j)=\kappa$ , $j(\kappa)\gt \lambda$ , 그리고 크기 $\lambda$ 인 $M$ 의 부분집합이 모두 $M$ 의 원소이면 $\kappa$ 를 **초콤팩트 기수**라 한다.

## Woodin 기수

$A\subseteq V_\kappa$ 와 서수 $\gamma$ 를 둔다. 기본 매장 $j\colon V\to M$ 이 있어 $\mathrm{crit}(j)=\lambda$ , $\gamma\lt j(\lambda)$ , $V_\gamma\subseteq M$ , $j(A)\cap V_\gamma=A\cap V_\gamma$ 이면 $\lambda$ 가 $A$ 에 대해 $\gamma$-**강**이라 한다.

도달 불가능 기수 $\kappa$ 가 **Woodin 기수**라는 것은 모든 $A\subseteq V_\kappa$ 에 대해 어떤 $\lambda\lt \kappa$ 가 모든 $\gamma\lt \kappa$ 에서 $A$ 에 대해 $\gamma$-강이라는 것이다. 강기수의 조건을 $V_\kappa$ 의 부분집합 하나하나에 상대화하고, 그 조건을 만족하는 $\lambda$ 를 $\kappa$ 아래에서 찾도록 바꾼 꼴이다.

# 성질

## 반사 층 사이의 함의

**정리.** 측도 가능이면 Ramsey 이고, Ramsey 이면 약콤팩트이고, 약콤팩트이면 Mahlo 이고, Mahlo 이면 도달 불가능이다.

마지막 함의는 정의에 들어 있다. 약콤팩트 기수는 $V_\kappa$ 에서 참인 $\mathbf\Pi^1\_1$ 논리식이 어떤 $\alpha\lt \kappa$ 의 $V_\alpha$ 에서도 참이라는 성질을 갖는다. $\kappa$ 미만의 도달 불가능 기수를 하나도 담지 않는 닫힌 비유계 집합이 있다고 하면 그 성질이 $\mathbf\Pi^1\_1$ 논리식으로 쓰이고, 그 논리식이 성립하는 $V_\alpha$ 의 $\alpha$ 가 도달 불가능이 되어 모순이 난다. Ramsey 에서 약콤팩트는 $n=2$ 로 특수화한 것이다. 측도 가능에서 Ramsey 는 $\kappa$ 완비 초필터로 각 크기의 칠하기를 차례로 줄여 동색 집합을 만든다[^1]. ∎

## 매장 층 사이의 함의

**정리.** 초콤팩트이면 강기수이고, 강기수이면 측도 가능이다.

초콤팩트 기수의 매장에서 크기 $\lambda$ 인 $M$ 의 부분집합이 $M$ 에 들어 있다는 조건은 $V_\lambda\subseteq M$ 을 준다. 강기수의 매장 $j$ 에서는 $X\in j(X)$ 인 $X\subseteq\kappa$ 를 모은 것이 $\kappa$ 완비 비주요 초필터가 된다. ∎

**정리.** 초콤팩트 기수는 Woodin 기수다.

초콤팩트 기수 $\kappa$ 와 $A\subseteq V_\kappa$ 를 두면 $\kappa$ 자신이 모든 $\gamma\lt \kappa$ 에서 $A$ 에 대해 $\gamma$-강이고, 초콤팩트성의 반사로 같은 성질을 갖는 $\lambda\lt \kappa$ 가 있다. ∎

## Woodin 기수와 측도 가능성

**정리.** Woodin 기수는 Mahlo 다. 가장 작은 Woodin 기수는 약콤팩트가 아니고, 따라서 측도 가능이 아니다[^2].

Woodin 기수는 함수 $f\colon\kappa\to\kappa$ 마다 $f\lbrack\lambda\rbrack\subseteq\lambda$ 인 $\lambda\lt \kappa$ 와 $\mathrm{crit}(j)=\lambda$ , $V_{j(f)(\lambda)}\subseteq M$ 인 기본 매장 $j\colon V\to M$ 이 있는 기수로도 특성화된다[^2]. $C\subseteq\kappa$ 를 닫힌 비유계 집합이라 하고 $f(\alpha)=\min(C\setminus(\alpha+1))$ 로 두면 그런 $\lambda$ 와 $j$ 가 있다. $\mathrm{crit}(j)=\lambda$ 인 기본 매장이 있으므로 $\lambda$ 는 측도 가능이고, $f\lbrack\lambda\rbrack\subseteq\lambda$ 에서 $C\cap\lambda$ 가 $\lambda$ 에 공종이므로 $C$ 가 닫힌 데서 $\lambda\in C$ 가 나온다. 측도 가능 기수 전체가 $\kappa$ 의 닫힌 비유계 집합과 모두 만나 정상집합이고, 측도 가능 기수는 도달 불가능이므로 $\kappa$ 는 Mahlo 다.

$\kappa$ 가 Woodin 이라는 조건은 $V_\kappa$ 의 부분집합에 대한 전칭 양화 하나와 $V_\kappa$ 안의 1계 조건으로 쓰이므로 $V_\kappa$ 위의 $\mathbf\Pi^1\_1$ 논리식이다. 약콤팩트성은 $\mathbf\Pi^1\_1$ 논리식의 반사와 동치여서, $\kappa$ 가 Woodin 이고 약콤팩트이면 어떤 $\alpha\lt \kappa$ 의 $V_\alpha$ 가 같은 논리식을 만족하고 그 $\alpha$ 가 Woodin 기수다. 그러면 $\kappa$ 는 가장 작은 Woodin 기수가 아니다. 측도 가능이면 약콤팩트이므로 가장 작은 Woodin 기수는 측도 가능도 아니다. ∎

Woodin 기수의 존재는 측도 가능 기수의 존재보다 무모순성 강도가 세지만, Woodin 기수가 측도 가능이라는 결론은 나오지 않는다.

## 구성가능 우주와의 양립

**정리.** 약콤팩트 기수 $\kappa$ 는 [구성가능 우주](constructible-universe.md) $L$ 에서도 약콤팩트이고, Ramsey 기수가 존재하면 $V\neq L$ 이다[^3].

약콤팩트성을 주는 분할 성질은 $L$ 로 내려간다. Ramsey 기수에서는 $0^\sharp$ 의 존재가 따라 나오고, 이것이 $L$ 의 기수들을 $V$ 에서 작게 만들어 $V\neq L$ 을 준다. ∎

## 무모순성 강도의 순서

알려진 큰 기수 공리는 도달 불가능, Mahlo, 약콤팩트, Ramsey, 측도 가능, 강기수, Woodin, 초콤팩트 순으로 줄 세워져 있다[^4]. 센 쪽을 가정하면 약한 쪽을 가정한 체계의 무모순성이 증명되고, 거꾸로는 증명되지 않는다.

# 활용

- **결정성의 가정.** [결정성](determinacy.md) 문서의 큰 기수 절이 쓰는 가정이 이 층의 이름으로 적힌다. Woodin 기수가 $n$ 개 있고 그 위에 측도 가능 기수가 있으면 $\mathbf\Pi^1\_{n+1}$ 집합이 결정되고, Woodin 기수가 무한히 많으면 사영집합 전체가 결정된다[^5].
- **무모순성 강도의 눈금.** 큰 기수 문서의 무모순성 강도 절이 쓰는 눈금의 눈금점이 이 층들이다. 명제 $\varphi$ 의 강도를 재려면 $\varphi$ 의 모형을 만드는 데 필요한 층과 $\varphi$ 에서 되얻는 층을 양쪽에서 좁힌다.
- **특이 기수 가설의 독립성.** 초콤팩트 기수에서 출발한 강제법이 특이 기수 가설이 깨지는 모형을 준다[^6]. 이 결론에 초콤팩트성이 필요한 이유는 강제법이 $\kappa$ 위의 모든 작은 부분집합을 매장의 상 안에서 다뤄야 하는 데 있다.

[^1]: F. Rowbottom, *Some strong axioms of infinity incompatible with the axiom of constructibility*, Annals of Mathematical Logic **3** (1971), 1–44.
[^2]: T. Jech, *Set Theory*, 3판, Springer, 2003, 34 장. 보조정리 34.2 가 Woodin 기수를 특성화하고, 그 조건이 $V_\delta$ 위의 $\mathbf\Pi^1\_1$ 논리식이므로 가장 작은 Woodin 기수가 약콤팩트가 아님을 적는다.
[^3]: A. Kanamori, *The Higher Infinite*, 2판, Springer, 2003, 7 절과 9 절.
[^4]: A. Kanamori, *The Higher Infinite*, 2판, Springer, 2003, 32 절의 도표. 이 책은 알려진 공리들을 이 순서로 배열하고 각 층의 무모순성 강도를 비교한다.
[^5]: D. A. Martin, J. R. Steel, *A proof of projective determinacy*, Journal of the American Mathematical Society **2** (1989), 71–125.
[^6]: M. Magidor, *On the singular cardinals problem I*, Israel Journal of Mathematics **28** (1977), 1–31.

# 연관 문서

## 선수지식

- [큰 기수](large-cardinals.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #logic #foundations
